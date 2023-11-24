"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { format } from "date-fns";

export interface Root {
  docs: Doc[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: any;
}

export interface Doc {
  id: string;
  name: string;
  location: Location;
  meetings: Meeting[];
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  address: string;
  position: number[];
}

export interface Meeting {
  meeting: Meeting2;
  id: string;
}

export interface Meeting2 {
  pathway: string;
  group: string;
  type: string;
  dayAndTime: DayAndTime;
}

export interface DayAndTime {
  isRecurring: boolean;
  dayOfWeek: string;
  timeOnly: string;
}

export default function GoogleMap({ data }: { data: Root }) {
  const position = {
    lat: 45.3156822,
    lng: -85.2600135,
  };
  const [selectedLocation, setSelectedLocation] = useState<Doc | null>(null);

  const handleMarkerClick = (doc: Doc) => {
    setSelectedLocation(doc);
  };

  function convertPositionToArray(position: number[]) {
    return { lat: position[1], lng: position[0] };
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className="grow">
        <Map zoom={9} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          {data.docs.map((doc, index) => (
            <AdvancedMarker
              key={index}
              position={convertPositionToArray(doc.location.position)}
              onClick={() => handleMarkerClick(doc)}
            >
              <Pin
              // background={"grey"}
              // borderColor={"white"}
              // glyphColor={"white"}
              />
            </AdvancedMarker>
          ))}
          {!!selectedLocation && (
            <InfoWindow
              position={convertPositionToArray(
                selectedLocation.location.position
              )}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>
                <p className="text-black font-bold text-2xl">
                  {selectedLocation.name}
                </p>
                <p className="text-black text-base">
                  {selectedLocation.location.address}
                </p>
                <div className="w-full h-1 bg-slate-950 mb-2 rounded-full"></div>
                <ul>
                  {selectedLocation.meetings
                    .filter(({ meeting }) => meeting.type !== "Zoom")
                    .map(({ meeting }, index) => (
                      <li key={index} className="text-black text-base">
                        <span className="capitalize">
                          {meeting.dayAndTime.dayOfWeek}{" "}
                        </span>
                        at{" "}
                        {format(
                          new Date(meeting.dayAndTime.timeOnly),
                          "h:mm a"
                        )}{" "}
                        - <span className="uppercase">{meeting.pathway}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
