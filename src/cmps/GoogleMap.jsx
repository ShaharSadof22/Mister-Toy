import React from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { Button } from '@material-ui/core';


class _GoogleMap extends React.Component {
    state = {
        lat: 32.0853,
        lng: 34.7818
    }
    onMarkerClick = (props, marker, event) => {
        console.log('props:', props, ' marker:', marker, 'event', event);
    }
    onMapClicked = (mapProps, map, ev) => {
        this.setState({ lat: ev.latLng.lat(), lng: ev.latLng.lng() })
    }
    changeStore = (storePos) => {
        this.setState({
            lat: storePos.lat,
            lng: storePos.lng
        })
    }

    render() {
        return (
            <div className="google-map-container">
                <div className="flex justify-center">
                    <Button variant="contained" color="primary" onClick={() => this.changeStore({ lat: 32.0853, lng: 34.7818 })}>Tel Aviv</Button>
                    <Button variant="contained" color="primary" onClick={() => this.changeStore({ lat: 52.520008, lng: 13.404954 })}>Berlin</Button>
                    <Button variant="contained" color="primary" onClick={() => this.changeStore({ lat: 29.550964, lng: 34.957635 })}>Eilat</Button>
                </div>

                <Map className="main-container" initialCenter={this.state} center={this.state} onClick={this.onMapClicked} google={this.props.google} zoom={12}>
                    <Marker position={{
                        lat: 32.0853,
                        lng: 34.7818
                    }}
                        name={'ShopBranch1'} />
                    <Marker position={{
                        lat: 52.520008,
                        lng: 13.404954
                    }}
                        name={'ShopBranch2'} />
                    <Marker position={{
                        lat: 29.550964, 
                        lng: 34.957635,
                    }}
                        name={'ShopBranch3'} />
                </Map>
            </div>
        );
    }
}

export const GoogleMap = GoogleApiWrapper({
    apiKey: ('AIzaSyA7wFxeGayDFtxLfft53sDr7sMu9cj7Vio')
})(_GoogleMap)