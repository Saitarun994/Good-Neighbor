import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import './Map.css'

export class MapContainer extends Component {

  componentDidMount() {
    // Scroll to a specific position only on the initial load
    if (!sessionStorage.getItem('scrollPositionSet')) {
      window.scrollTo(0, 90); // Adjust the scroll position as needed
      sessionStorage.setItem('scrollPositionSet', 'true');
    }
  
    // Check if the viewport width is less than or equal to 768 pixels
    if (window.innerWidth <= 768) {
      // Disable scrolling on mobile devices
      document.body.style.overflow = 'hidden';
    }
  }
  

  componentWillUnmount() {
    // Clear the session storage when the component is unmounted
    sessionStorage.removeItem('scrollPositionSet');
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
        className="map"
        initialCenter={
          {
            lat: 38.54156571321539,
            lng: -121.76067694496183
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'I Lost my wallet'}
          description={"Has anyone seen my wallet? Last seen at the ARC men's bathroom. Thank you"}
          image="public/wallet.jpeg"
          position={{ lat: 38.5428366593408, lng: -121.74967389178279 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Lost Dog'}
          description={"My dog ran out of the house and got lost. Please report sighting if you see him. Thank you Good Neighbor!"}
          image="public/dog.jpg"
          position={{ lat: 38.550208066830656, lng: -121.768789526105 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Found an iPhone'}
          description={"I found an iPhone laying in arroyo field. Hope the owner sees this!"}
          image="public/cellphone_found.jpg"
          position={{ lat: 38.5548439169783, lng: -121.77285587083493 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Found this Arduino Uno'}
          description={"Contact me, I used it for Hackdavis'24, I'll promise to give it back lols"}
          image="public/arduino-found.webp"
          position={{ lat: 38.54185794728171, lng: -121.75967598119885 }} 
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'I lost my Arduino Uno'}
          description={"I'm the only one with an Uno at Hackdavis'24, someone help me find it please?"}
          image="public/arduino.jpg"
          position={{ lat: 38.54229166400134, lng: -121.75962469629846 }} 
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Have anyone seen an iPhone around Arroyo Field?'}
          description={"I was doing my daily runs and the phone fell out of my pocket out of nowhere..."}
          image="public/cellphone.jpg"
          position={{ lat: 38.55519249765446, lng: -121.77734623227184 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'My son lost his favorite soccer ball'}
          description={"My two kids were playing soccer and one kicked it way too far, it was by the Union Center at Davis, please help find my son's ball back."}
          image="public/football.jpg"
          position={{ lat: 38.54103855634179, lng: -121.76017257231501 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Poodle wandering around UC Davis'}
          description={"Saw this big boy while biking around campus, Mr. Bubbles is his name, contact me 916-776-7788"}
          image="public/poodle-found.jpg"
          position={{ lat: 38.54347059612643, lng: -121.74757966637456 }} //, 
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div className='popUp'>
            <h4 className="locTitle">{this.state.selectedPlace.name}</h4>
            <p className="locDesc">{this.state.selectedPlace.description}</p>
            <img className="locImg" src={this.state.selectedPlace.image} style={{width: '200px'}} alt="Marker Image" />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
})(MapContainer);
