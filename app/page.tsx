import { ModeToggle } from "@/_components/mode-toggle";
import { Button } from "@/_components/ui/button";
import { Calendar } from "@/_components/ui/calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
    </main>
  );
}
