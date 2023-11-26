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
    <Card className={cn("maw-w-sm", className)} {...props}>
      <CardHeader>
        <CardTitle>{location.name}</CardTitle>
        <CardDescription>
          {location.address.street}
          <br /> {location.address.city}.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        {location.meetings?.map(({ meeting }, index) => (
          <div key={index} className="flex items-center mb-4">
            <span className="mr-2 h-2 w-2 rounded-full bg-sky-500" />
            <p className="text-sm font-medium">
              <span className="capitalize">{meeting.dayAndTime.dayOfWeek}</span>{" "}
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
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
