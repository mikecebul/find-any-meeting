"use client";

import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import GoogleMap from "@/components/google-map";

export default function Component() {
  return (
    <main className="w-full h-[100svh] relative">
      <div className="hidden lg:block absolute inset-0">
        <GoogleMap />
      </div>
      <aside className="hidden lg:block absolute top-0 left-0 p-4 lg:w-64 lg:h-full bg-white shadow-lg lg:shadow-none lg:bg-transparent lg:p-0 z-10">
        <Search />
      </aside>
      {/* <div className="lg:hidden py-8">
          <Dialog>
            <DialogTrigger className="w-full">
              <Button>Open Search Menu</Button>
            </DialogTrigger>
            <DialogContent>
              <Search />
              <DialogFooter>
                <Button variant="secondary">Cancel</Button>
                <Button variant="default">Search</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <ul className="divide-y divide-gray-200">
            <li className="p-4">
              <h2 className="font-semibold">Meeting 1</h2>
              <p className="text-sm text-gray-500">Meeting details...</p>
            </li>
            <li className="p-4">
              <h2 className="font-semibold">Meeting 2</h2>
              <p className="text-sm text-gray-500">Meeting details...</p>
            </li>
            <li className="p-4">
              <h2 className="font-semibold">Meeting 3</h2>
              <p className="text-sm text-gray-500">Meeting details...</p>
            </li>
          </ul>
        </div> */}
    </main>
  );
}

function Search() {
  return (
    <nav className="space-y-1 lg:space-y-4 bg-slate-950/90 px-4 py-8 rounded-br-md">
      <h1 className="text-2xl font-bold">Meeting Finder</h1>
      <p className="text-sm font-light">Find meetings near you</p>
      <div className="space-y-2 lg:space-y-4">
        <Label htmlFor="meeting-type">Meeting Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a meeting type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="type1">Type 1</SelectItem>
              <SelectItem value="type2">Type 2</SelectItem>
              <SelectItem value="type3">Type 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2 lg:space-y-4">
        <Label htmlFor="distance">Distance</Label>
        <Input
          aria-describedby="distance-constraint"
          id="distance"
          placeholder="In miles"
          required
          type="number"
        />
        <p className="text-sm text-gray-500" id="distance-constraint">
          Enter a number from 1 to 100
        </p>
      </div>
      <div className="space-y-2 lg:space-y-4">
        <Label htmlFor="day">Day</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a day" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="monday">Monday</SelectItem>
              <SelectItem value="tuesday">Tuesday</SelectItem>
              <SelectItem value="wednesday">Wednesday</SelectItem>
              <SelectItem value="thursday">Thursday</SelectItem>
              <SelectItem value="friday">Friday</SelectItem>
              <SelectItem value="saturday">Saturday</SelectItem>
              <SelectItem value="sunday">Sunday</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2 lg:space-y-4">
        <Label htmlFor="time">Time</Label>
        <Input id="time" required type="time" />
      </div>
      <Button className="w-full mt-4" type="submit">
        Search
      </Button>
    </nav>
  );
}
