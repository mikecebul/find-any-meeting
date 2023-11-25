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

type CardProps = React.ComponentProps<typeof Card>;
interface MeetingListProps extends CardProps {
  doc: Doc;
}

export interface Doc {
  id: string;
  name: string;
  address: string;
  position: number[];
  meetings: Meeting[];
  createdAt: string;
  updatedAt: string;
}

export interface Meeting {
  meeting: Meeting2;
  id: string;
}

export interface Meeting2 {
  pathway: string;
  group: string;
  details: string;
  type: string;
  dayAndTime: DayAndTime;
}

export interface DayAndTime {
  isRecurring: boolean;
  dayOfWeek: string;
  timeOnly: string;
}

export function MeetingList({ doc, className, ...props }: MeetingListProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{doc.name}</CardTitle>
        <CardDescription>{doc.address}.</CardDescription>
      </CardHeader>
      <CardContent className="">
        {doc.meetings.map(({ meeting }, index) => (
          <div key={index} className="flex items-center mb-4">
            <span className="mr-2 h-2 w-2 rounded-full bg-sky-500" />
            <p className="text-sm font-medium">
              <span className="capitalize">{meeting.dayAndTime.dayOfWeek}</span>{" "}
              at {format(new Date(meeting.dayAndTime.timeOnly), "h:mm a")} -{" "}
              <span className="uppercase">{meeting.pathway}</span>
            </p>
            <p className="ml-2 text-sm text-muted-foreground">
              {meeting.details}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
