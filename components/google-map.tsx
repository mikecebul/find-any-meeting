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
import { useTheme } from "next-themes";

export default function GoogleMap({ locations }: { locations: Location[] }) {
  const { theme } = useTheme();
  const darkMapId = "e618145b0a0748c3";
  const lightMapId = "1f318bfbce12c110";

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
      <Map
        zoom={9}
        center={position}
        mapId={theme === "dark" ? darkMapId : lightMapId}
        options={{
          zoomControl: false,
          mapTypeControl: false,
          // streetViewControl: false,
          fullscreenControl: false,
        }}
      >
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
    </APIProvider>
  );
}
