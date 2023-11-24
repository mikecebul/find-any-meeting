import GoogleMap from "@/components/google-map";
import { Header } from "@/components/header";

async function getData() {
  const res = await fetch(
    "https://fam-payload-production.up.railway.app/api/locations",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Component() {
  const data = await getData();
  return (
    <main className="flex flex-col h-full w-full">
      <Header />
      <GoogleMap data={data} />
    </main>
  );
}
