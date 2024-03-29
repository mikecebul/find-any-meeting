import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="container flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2">
          <div className="lg:pb-8">
            <p className="text-base font-semibold leading-7 text-muted-foreground">
              Empower Recovery Across All Pathways
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Join as a Volunteer
            </h2>
            <p className="my-6 text-base font-normal leading-7 max-w-prose">
              Our platform is committed to offering a comprehensive and
              up-to-date meeting list that embraces all pathways to recovery,
              but we can&apos;t do it alone!
            </p>
          </div>
          <h2 className="text-xl font-semibold">
            A Call to Recovery Coaches and Supporters
          </h2>
          <p className="mt-2 max-w-prose">
            We&apos;re looking for volunteers to maintain the meeting lists of
            recovery support groups and what better people than resource brokers
            like recovery coaches! The type of meetings we list are ever
            expanding.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <ul className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 font-medium list-disc list-inside lg:grid-cols-1 xl:grid-cols-2 pt-8 lg:pt-0 lg:w-auto">
            <li>Narcotics Anonymous (NA)</li>
            <li>Alcoholics Anonymous (AA)</li>
            <li>Overeaters Anonymous (OA)</li>
            <li>Al-Anon Family Groups</li>
            <li>Nar-Anon Family Groups</li>
            <li>Talking Circles</li>
            <li>All Recovery Meetings</li>
            <li>Celebrate Recovery</li>
            <li>Dharma Recovery</li>
            <li>SMART Recovery</li>
            <li>Secular AA</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 container">
        <Link
          className={cn(buttonVariants(), "text-xl font-semibold")}
          href="/sign-up"
        >
          Register as a Volunteer
        </Link>
      </div>
    </div>
  );
}
