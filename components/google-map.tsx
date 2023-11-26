"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { MeetingList } from "./meeting-list";
import { Location } from "@/types/payload-types";

export default function GoogleMap({ locations }: { locations: Location[] }) {
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

  function convertPositionToArray(position: number[]) {
    return { lat: position[1], lng: position[0] };
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className="grow">
        <Map zoom={9} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          {locations
            .filter((location) => !!location.position)
            .map((location, index) => (
              <AdvancedMarker
                key={index}
                position={convertPositionToArray(location.position!)}
                onClick={() => handleMarkerClick(location)}
              >
                <Pin />
              </AdvancedMarker>
            ))}
          {!!selectedLocation && (
            <InfoWindow
              position={
                convertPositionToArray(selectedLocation.position!) || position
              }
              onCloseClick={() => setSelectedLocation(null)}
            >
              <MeetingList location={selectedLocation} />
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
