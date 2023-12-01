import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Location } from "@/types/payload-types";
import { ExternalLink, Ghost } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { ReactNode } from "react";

type CardProps = React.ComponentProps<typeof Card>;

type Meeting = NonNullable<Location["meetings"]>[number];

interface MeetingListProps extends CardProps {
  location: Location;
}

export function MeetingList({ location, ...props }: MeetingListProps) {
  return (
    <Card className="min-w-fit" {...props}>
      <CardHeader>
        <CardTitle>{location.name}</CardTitle>
        <CardDescription>
          {`${location.street}, ${location.city}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* In Person and Hybrid Meetings */}
        {location.meetings?.some(({ type }) => type !== "zoom") && (
          <p className="text-muted-foreground font-semibold pb-2 mb-2 border-b tracking-wider">
            In Person & Hybrid
          </p>
        )}
        {location.meetings
          ?.filter(({ type }) => type === "in-person" || type === "hybrid")
          .map((meeting, index) => (
            <div key={index} className={cn("flex items-center -ml-4")}>
              <ZoomLink meeting={meeting}>
                <MeetingDetails meeting={meeting} />
              </ZoomLink>
            </div>
          ))}

        {/* Zoom Only Meetings */}
        {location.meetings?.some(({ type }) => type === "zoom") && (
          <p className="text-muted-foreground font-semibold pb-2 border-b mb-2 mt-3 tracking-wider">
            Zoom Only
          </p>
        )}
        {location.meetings
          ?.filter(({ type }) => type === "zoom")
          .map((meeting, index) => (
            <div key={index} className="flex items-center -ml-4">
              <ZoomLink meeting={meeting}>
                <MeetingDetails meeting={meeting} />
              </ZoomLink>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}

function ZoomLink({
  meeting,
  children,
}: {
  meeting: Meeting;
  children: ReactNode;
}) {
  if (meeting.type === "in-person")
    return (
      <div className={cn(buttonVariants({ variant: "blank" }))}>{children}</div>
    );

  return (
    <a
      href={meeting.zoomLink || "#"}
      className={cn(buttonVariants({ variant: "ghost" }), "flex items-center")}
    >
      {children}

      <span className="inline-flex ml-2">
        <ExternalLink size={16} className="" />
      </span>
    </a>
  );
}

function MeetingDetails({ meeting }: { meeting: Meeting }) {
  return (
    <>
      <span className="flex-shrink-0 mr-2 h-2 w-2 rounded-full bg-sky-500" />
      <p className="text-sm font-medium">
        <span className="capitalize">{meeting.dayOfWeek}</span>{" "}
        <span className="text-muted-foreground">at </span>
        <span>{format(new Date(meeting.timeOnly), "h:mm a")} -</span>{" "}
        <span>{prettifyPathway(meeting.pathway)}</span>
        <span className="text-muted-foreground capitalize">
          {meeting.gender !== "coed" ? ` - ${meeting.gender}` : ""}
        </span>
      </p>
    </>
  );
}

function prettifyPathway(pathway: string) {
  // Check for special cases with two-letter pathways
  if (pathway.length === 2) {
    return pathway.toUpperCase();
  }

  // Special handling for "al-anon" and "nar-anon"
  if (pathway === "al-anon" || pathway === "nar-anon") {
    return pathway
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");
  }

  // General case: replace hyphens with spaces and capitalize each word
  return pathway
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
