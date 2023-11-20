import { ModeToggle } from "@/_components/mode-toggle";
import SimpleMap from "@/_components/simple-map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <ModeToggle />
      <SimpleMap />
    </main>
  );
}
