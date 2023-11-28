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

export default async function Component() {
  const { docs } = await getData();
  return (
    <main className="grow ">
      <GoogleMap locations={docs} />
    </main>
  );
}
