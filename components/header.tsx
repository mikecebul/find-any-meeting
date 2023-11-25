"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { RevalidatePath } from "@/actions/server";

export function Header() {
  return (
    <header className="flex w-full">
      <div className="flex items-center justify-between w-full pr-10 pl-4 lg:container lg:pr-14 h-14 lg:h-20">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "py-4 px-6 text-2xl font-semibold"
          )}
        >
          Find Any Meeting
        </Link>
        <Button onClick={() => RevalidatePath()}>Refresh</Button>
        <ModeToggle />
      </div>
    </header>
  );
}
