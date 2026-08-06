import { google } from 'googleapis';

type WorkoutRow = {
  date: string;
  category: string;
  exercise_name: string;
  set_number: number;
  reps: number;
  weight: number;
}

export type GymLog = {
  date: string;
  category: string;
  exercises: Exercises[];
}

export type Exercises = {
  exercise_name: string;
  sets: SetData[];
}

export type SetData = {
  reps: number;
  weight: number;
}

/* 
  Example of a GymLog object
  date, category, 
  [
    {  exercise_name,
      [
        {reps, weight},
        {reps, weight},
        {reps, weight}
      ]  
    },
    {  exercise_name,
      [
        {reps, weight},
        {reps, weight},
        {reps, weight}
      ]  
    },
  ]
*/

export async function getGymData(): Promise<WorkoutRow[]> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A:F'
    })

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return [];
    }
    
    return rows.slice(1).map((row) => ({
      date: row[0],
      category: row[1],
      exercise_name: row[2],
      set_number: parseInt(row[3], 10),
      reps: parseInt(row[4], 10),
      weight: parseInt(row[5], 10),
    }));
  }
  catch (error) {
    console.log("Error error error couldnt fetch sheets data hehehehaw", error);
    return [];
  }
}

export function processGymData(rows: WorkoutRow[]):GymLog[] {
  const dateMap = new Map<string, {
    category: string;
    exerciseMap: Map<string, Exercises>;
  }>();

  for (const row of rows) {
    if (!dateMap.has(row.date)) {
      dateMap.set(row.date, {
        category: row.category,
        exerciseMap: new Map()
      });
    }
    const exerciseMap = dateMap.get(row.date)!.exerciseMap;

    if (!exerciseMap.has(row.exercise_name)) {
      exerciseMap.set(row.exercise_name, {
        exercise_name: row.exercise_name,
        sets: []
      });
    }

    exerciseMap.get(row.exercise_name)!.sets.push({
      reps: row.reps, 
      weight: row.weight
    });
  }

  return Array.from(dateMap.entries()).map(([date, data]):GymLog => ({
    date,
    category: data.category,
    exercises: Array.from(data.exerciseMap.values()),
  }));
}