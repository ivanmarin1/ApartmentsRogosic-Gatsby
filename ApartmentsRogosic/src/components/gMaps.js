import React from "react"
import GoogleMapReact from "google-map-react"
import Image from "../components/image"

const defaultProps = {
  center: {
    lat: 43.311909,
    lng: 16.431781,
  },
  zoom: 15,
}

const Marker = props => {
  return (
    <div
      style={{ transform: "translate(-50%, -100%)" }}
      onClick={() => {
        defaultProps.zoom = 30
      }}
    >
      <Image
        style={{
          color: "white",
          background: "grey",
          padding: "15px 10px",
          display: "inline-flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          transform: "translate(-50%, -50%)",
        }}
        filename="marker.png"
        alt="marker"
      ></Image>
    </div>
  )
}

const GoogleMap = () => (
  <div style={{ height: "50vh", width: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GMAPS_API }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Marker
        lat={defaultProps.center.lat}
        lng={defaultProps.center.lng}
      ></Marker>
    </GoogleMapReact>
  </div>
)

export default GoogleMap
