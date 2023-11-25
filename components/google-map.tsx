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
import { MeetingList } from "./meeting-list";

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

export default function GoogleMap({ data }: { data: Root }) {
  const position = {
    lat: 45.3156822,
    lng: -85.2600135,
  };
  const [selectedDoc, setselectedDoc] = useState<Doc | null>(null);

  const handleMarkerClick = (doc: Doc) => {
    setselectedDoc(doc);
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
              position={convertPositionToArray(doc.position)}
              onClick={() => handleMarkerClick(doc)}
            >
              <Pin />
            </AdvancedMarker>
          ))}
          {!!selectedDoc && (
            <InfoWindow
              position={convertPositionToArray(selectedDoc.position)}
              onCloseClick={() => setselectedDoc(null)}
            >
              <MeetingList doc={selectedDoc} />
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
