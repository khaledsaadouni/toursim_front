import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lng: null
        };
    }

    componentDidMount() {
        // Extract latitude and longitude from Google Maps link
        const link = "https://www.google.com/maps/place/INSAT+Institut+National+des+Sciences+Appliqu%C3%A9es+et+de+Technologie/@36.8434941,10.195461,17.96z/data=!4m14!1m7!3m6!1s0x12fd34c6d1e93bef:0x4153c4733f285343!2sINSAT+Institut+National+des+Sciences+Appliqu%C3%A9es+et+de+Technologie!8m2!3d36.8429174!4d10.1962786!16s%2Fm%2F0h52xyw!3m5!1s0x12fd34c6d1e93bef:0x4153c4733f285343!8m2!3d36.8429174!4d10.1962786!16s%2Fm%2F0h52xyw";

        // Parse the URL
        const url = new URL(link);

        // Extract the latitude and longitude from the URL query parameters
        const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
        const match = url.href.match(regex);
        if (match) {
            this.setState({
                lat: parseFloat(match[1]),
                lng: parseFloat(match[2])
            });
        } else {
            console.log("Unable to extract latitude and longitude from link.");
        }
    }

    render() {
        const { lat, lng } = this.state;
        if (lat === null || lng === null) {
            return <div>Loading map...</div>;
        }

        return (
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, lng]}>
                    <Popup>{this.props.locationName}</Popup>
                </Marker>
            </MapContainer>
        );
    }
}
export default MyMap;
