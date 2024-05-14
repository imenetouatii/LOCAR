import React from 'react';
import './trace.css';
import Icon from './Icon';
import { Map, TileLayer, Marker, Polyline, Popup  } from 'react-leaflet';

const Trace = (tabpos) => {
    // const algerie=[
    //     36.7762,3.05997
    // ];

  //console.log(tabpos);
  const zoom= 17;
  const latlngs=[];
  for(var i=0;i<tabpos.tabpos.length;i++){
    latlngs.push(tabpos.tabpos[i]);
    }

    const items= [];
    for(i=0;i<latlngs.length-1;i++){
      items.push(
        <Polyline positions={[
          latlngs[i], latlngs[i+1],
        ]} color={'red'} />
      );
    }
    return (
      <Map className="map" center={latlngs[parseInt((latlngs.length/2).toFixed())]} zoom={zoom}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          noWrap={true}
          maxZoom={17}
          id='mapbox/streets-v11'
          url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
          accessToken='pk.eyJ1IjoibWVsYW1ldXIxIiwiYSI6ImNrbnhoYTJ2NzE2cjIycG9heHc0amlxb2MifQ.TUpN8Ff4exfuNYxTiSpJEA'
        />

        {items}

        <Marker position={latlngs[0]} icon={Icon} >
          <Popup>
          Le premier lieu visité 
          </Popup>
        </Marker>

        <Marker position={latlngs[(latlngs.length) - 1]} icon={Icon} >
          <Popup>
          Le dernier lieu visité 
          </Popup>
        </Marker>


      </Map>
    );

}

export default Trace;