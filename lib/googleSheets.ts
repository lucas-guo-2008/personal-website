import { google } from 'googleapis';

export type WorkoutRow = {
  date: string;
  category: string;
  exercise_name: string;
  set_number: number;
  reps: number;
  weight: number;
}

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
    console.log("Error error error couldnt fetch sheets data", error);
    return [];
  }
}