import { getGymData } from '@/lib/googleSheets';

export default async function GymPage() {
  const data = await getGymData();
  console.log(data);
  return (<p>{data[0].date}</p>)
}