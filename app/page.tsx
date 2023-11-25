import GoogleMap from "@/components/google-map";
import { Header } from "@/components/header";

async function getData() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API}/locations`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export interface Root {
  docs: Doc[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: any;
}

export interface Doc {
  id: string;
  name: string;
  address: string;
  position: number[];
  meetings: Meeting[];
  createdAt: string;
  updatedAt: string;
}

export interface Meeting {
  meeting: Meeting2;
  id: string;
}

export interface Meeting2 {
  pathway: string;
  group: string;
  details: string;
  type: string;
  dayAndTime: DayAndTime;
}

export interface DayAndTime {
  isRecurring: boolean;
  dayOfWeek: string;
  timeOnly: string;
}

export default async function Component() {
  const data: Root = await getData();
  return (
    <main className="flex flex-col h-full w-full">
      <p>{data?.docs[0]?.name}</p>
      <Header />
      <GoogleMap data={data} />
    </main>
  );
}
