import { getGymData, processGymData } from '@/lib/googleSheets';

export default async function GymPage() {
  const data = await getGymData();
  const processedData = processGymData(data);
  console.log(data);
  console.log(processedData);

  return <p>{data[0].date}</p>
}