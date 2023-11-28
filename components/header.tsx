"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex container items-center justify-between w-full xl:px-0 h-14 lg:h-20">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost", size: "text" }),
          "text-2xl font-semibold"
        )}
      >
        Find Any Meeting
      </Link>
      <ModeToggle />
    </header>
  );
}
