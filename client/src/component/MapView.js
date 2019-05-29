import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, } from 'react-leaflet';


class MapView extends Component {


    render() {
        const { dataSearch } = this.props

        return (
            <LeafletMap
                center={[-28.4561529, 114.5527204]}
                zoom={4}
                maxZoom={10}
                attributionControl={true}
                zoomControl={false}
                doubleClickZoom={false}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {
                    dataSearch.map((data, indx) => (
                        <Marker position={[data.lat, data.lng]} key={indx}
                        >
                            <Popup >
                                <h5 class="marker-location"> {data.LGA}</h5>
                                <h5 class="marker-total">Total: {data.total}</h5>
                                <h5 class="marker-formatted-address">{data.formatted_address}</h5>

                            </Popup>
                        </Marker>
                    )
                    )
                }

            </LeafletMap>

        );
    }
}

export default MapView;
