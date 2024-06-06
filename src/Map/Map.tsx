import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

import { mapContainerStyle, mapOptions } from "./map.config";

const MapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: 39.8283, lng: -98.5795 }}
        zoom={10}
        options={mapOptions}></GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
