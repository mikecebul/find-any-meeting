import GoogleMap from "@/components/google-map";

async function getData() {
  const res = await fetch(
    "https://fam-payload-production.up.railway.app/api/locations"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Component() {
  const data = await getData();
  return (
    <main className="w-full h-[100svh]">
      <GoogleMap data={data} />
    </main>
  );
}
