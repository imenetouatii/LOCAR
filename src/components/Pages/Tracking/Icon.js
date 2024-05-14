import L from 'leaflet';
import iconImg from './marker.svg';


const Icon = new L.icon({
    iconUrl: iconImg,
    iconRetinaUrl: iconImg,
    iconSize: [40, 50],
    iconAnchor: [20, 43]
});

export default Icon;