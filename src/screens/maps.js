import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return(
       <Map 
            google={this.props.google}
            initialCenter={{
              lat: 38.1383,
              lng: -97.4314
       }}>

       
       <Marker onClick={this.onMarkerClick}
               namd={'Current Location'} />

       <InfoWindow onClose={this.onInfoWindowClose}>
       
         </InfoWindow>       
       </Map>
        );
    }
  }

  const LoadingContainer = (props) => (
      <div className="fancy">Fancy Loading Container!</div>
  )
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBy6jiwIZ_MF6R_ZVQvWbbS_mUSWGhrV5A"),
    LoadingContainer: LoadingContainer
  })(MapContainer)