import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"

const mapStyles = {
  width: "100%",
  height: "300px",
}

const defaultProps = {
  center: {
    lat: 43.311909,
    lng: 16.431781,
  },
  zoom: 15,
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  openGoogleMaps = () => {
    if (
      navigator.platform.indexOf("iPhone") !== -1 ||
      navigator.platform.indexOf("iPod") !== -1 ||
      navigator.platform.indexOf("iPad") !== -1
    )
      window.open(
        "maps://maps.google.com/maps?daddr=" +
          defaultProps.center.lat +
          "," +
          defaultProps.center.lng +
          "&amp;ll="
      )
    else
      window.open(
        "https://maps.google.com/maps?daddr=" +
          defaultProps.center.lat +
          "," +
          defaultProps.center.lng +
          "&amp;ll="
      )
  }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: defaultProps.center.lat,
          lng: defaultProps.center.lng,
        }}
        // onClick={this.openGoogleMaps}
      >
        <Marker onClick={this.onMarkerClick} name={"Apartments Rogošić"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GMAPS_API,
})(MapContainer)
