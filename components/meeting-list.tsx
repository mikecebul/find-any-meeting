import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Location } from "@/types/payload-types";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";

type CardProps = React.ComponentProps<typeof Card>;

interface MeetingListProps extends CardProps {
  location: Location;
}

export function MeetingList({
  location,
  className,
  ...props
}: MeetingListProps) {
  return (
    <Card className={cn(" maw-w-sm lg:w-96", className)} {...props}>
      <CardHeader>
        <CardTitle>{location.name}</CardTitle>
        <CardDescription>
          {`${location.street}, ${location.city}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <p className="text-muted-foreground font-semibold pb-2 border-b mb-2 tracking-wider">
          In Person
        </p>
        {location.meetings
          ?.filter(
            ({ meeting }) =>
              meeting.type === "in-person" || meeting.type === "hybrid"
          )
          .map(({ meeting }, index) => (
            <div key={index} className="flex items-center mb-5">
              <span className="flex-shrink-0 mr-2 h-2 w-2 rounded-full bg-sky-500" />
              <p className="text-sm font-medium">
                <span className="capitalize">
                  {meeting.dayAndTime.dayOfWeek}
                </span>{" "}
                <span className="text-muted-foreground">at </span>
                <span>
                  {format(new Date(meeting.dayAndTime.timeOnly), "h:mm a")} -
                </span>{" "}
                <span className="uppercase">{meeting.pathway}</span>
                <span className="text-muted-foreground capitalize">
                  {meeting.gender !== "coed" ? ` - ${meeting.gender}` : ""}
                </span>
              </p>
            </div>
          ))}
        <p className="text-muted-foreground font-semibold pb-2 border-b mb-2 tracking-wider">
          Zoom
        </p>
        {location.meetings
          ?.filter(
            ({ meeting }) =>
              meeting.type === "zoom" || meeting.type === "hybrid"
          )
          .map(({ meeting }, index) => (
            <div key={index} className="flex items-center -ml-4">
              <a
                href={meeting.zoomLink || "#"}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "flex items-center"
                )}
              >
                <span className="flex-shrink-0 mr-2 h-2 w-2 rounded-full bg-sky-500" />
                <p className="text-sm font-medium">
                  <span className="capitalize">
                    {meeting.dayAndTime.dayOfWeek}
                  </span>{" "}
                  <span className="text-muted-foreground">at </span>
                  <span>
                    {format(new Date(meeting.dayAndTime.timeOnly), "h:mm a")} -
                  </span>{" "}
                  <span className="uppercase">{meeting.pathway}</span>
                  <span className="text-muted-foreground capitalize">
                    {meeting.gender !== "coed" ? ` - ${meeting.gender}` : ""}
                  </span>
                  <span className="inline-flex ml-2">
                    <ExternalLink size={16} className="" />
                  </span>
                </p>
              </a>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
