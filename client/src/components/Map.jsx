import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  position: 'fixed',
  width: '100vw',
  height: '100vh'
};

export class MapContainer extends Component {

  componentDidMount() {
    // Disable scrolling on the entire page
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Re-enable scrolling when the component is unmounted
    document.body.style.overflow = 'auto';
  }

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 38.54156571321539,
            lng: -121.76067694496183
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Lost Wallet'}
          description={"Has anyone seen my wallet? Last seen at the ARC men's bathroom. Thank you"}
          position={{ lat: 38.5428366593408, lng: -121.74967389178279 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Lost Dog'}
          description={"My dog ran out of the house and got lost. Please report sighting if you see him. Thank you Good Neighbor!"}
          position={{ lat: 38.550208066830656, lng: -121.768789526105 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Found Iphone'}
          description={"I found an iPhone laying in arroyo field. Hope the owner sees this!"}
          position={{ lat: 38.5548439169783, lng: -121.77285587083493 }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div style={{ backgroundColor: 'white', padding: '10px' }}>
            <h4 style={{fontSize: '30px'}}>{this.state.selectedPlace.name}</h4>
            <p style={{fontSize: '15px'}}>{this.state.selectedPlace.description}</p>
            <img src='' alt='Image' style={{width: '200px'}}></img>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
})(MapContainer);
