import React from "react";

import "./Map.css";

const Map = (props) => {
  console.log("sdf", props.center);

  return (
    <div className={`map ${props.className}`} style={props.style}>
      <p>Dupa, nie ma mapy</p>
      <p>LAT:{props.center.lat}</p>
      <p>LNG:{props.center.lng}</p>
    </div>
  );
};

export default Map;
