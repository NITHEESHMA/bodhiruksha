import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '90vw',
    height: '100vh',
    marginLeft:'35px',
  };
  
  const center = {
    lat: 35.6804,
    lng: 139.769,
  };


function Map(){

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      });
    
      if (loadError) return 'Error loading maps';
      if (!isLoaded) return 'Loading maps';
    return (
        <div>
            
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
    
      ></GoogleMap>


        </div>
    );
};

export default Map;