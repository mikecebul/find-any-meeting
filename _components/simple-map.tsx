"use client";

import React from "react";
import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 45.314789,
      lng: -85.25872,
    },
    zoom: 9,
  };

  return (
    // Important! Always set the container height explicitly
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_SK as string,
      }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      {/* <AnyReactComponent lat={45.314789} lng={-85.25872} text="Chx" /> */}
    </GoogleMapReact>
  );
}
