"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Location, Meeting, locations } from "@/data/locations";

export default function GoogleMap() {
  const position = {
    lat: 45.3156822,
    lng: -85.2600135,
  };
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className="w-full h-[100svh]">
        <Map zoom={9} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          {locations.map((location, index) => (
            <AdvancedMarker
              key={index}
              position={location.position}
              onClick={() => handleMarkerClick(location)}
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
              position={position}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>
                <p className="text-black font-bold text-2xl">
                  {selectedLocation.name}
                </p>
                <p className="text-black text-base">
                  {selectedLocation.address}
                </p>
                <div className="w-full h-1 bg-slate-950 mb-2 rounded-full"></div>
                <ul>
                  {selectedLocation.meetings
                    .filter((meeting) => meeting.type !== "Zoom")
                    .map((meeting, index) => (
                      <li key={index} className="text-black text-base">
                        {meeting.day} at {meeting.time} - {meeting.group}
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
