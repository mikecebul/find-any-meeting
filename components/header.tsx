"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { useState } from "react";

export function Header() {
  return (
    <header className="flex container items-center justify-between w-full h-[10vh]">
      <Link href="/" className="text-2xl font-semibold hover:text-primary/80">
        Find Any Meeting
      </Link>
      <Menu />
    </header>
  );
}

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <Link
          className="text-2xl font-semibold hover:text-primary/80"
          href="/"
          onClick={() => {
            setOpen(false);
          }}
        >
          Find Any Meeting
        </Link>
        <Separator className="mt-2" />
        <div className="my-8 space-y-4 flex flex-col">
          <Link
            className="text-lg font-semibold hover:text-primary/80"
            href="/"
            onClick={() => {
              setOpen(false);
            }}
          >
            Meetings
          </Link>
          <Link
            className="text-lg font-semibold hover:text-primary/80"
            href="/about"
            onClick={() => {
              setOpen(false);
            }}
          >
            About
          </Link>
          <Link
            className="text-lg font-semibold hover:text-primary/80"
            href="/sign-up"
            onClick={() => {
              setOpen(false);
            }}
          >
            Sign Up
          </Link>
          <a
            className="text-lg font-semibold hover:text-primary/80"
            href="https://admin.fam.mikecebul.dev"
          >
            Sign In
          </a>
        </div>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  );
}
