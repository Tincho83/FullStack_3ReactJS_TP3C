import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CustomMap.css'
import { Box, Flex } from '@chakra-ui/react'
import L from 'leaflet'; // Importa Leaflet
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet

// Sobrescribe las opciones del icono predeterminado de Leaflet
delete L.Icon.Default.prototype._getIconUrl;

const urlIcono = "https://iocomm.000webhostapp.com/marker-icon.png";
const urlIconob = "https://iocomm.000webhostapp.com/marker-shadow.png";

L.Icon.Default.mergeOptions({
  //iconRetinaUrl: markerIcon,
  iconRetinaUrl: urlIcono,
  iconUrl: urlIcono,
  shadowUrl: urlIconob,
});

const CustomMap = () => {
  return (
    <Flex h={'14hv'} w={'100%'} align={'center'} className='flexboxFooter' id='flexboxFooter'>
      <Box className='mapContainer'>
        <MapContainer center={[-31.41274, -64.20488]} zoom={19} style={{ height: '380px', width: '400px' }} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          <Marker position={[-31.41274, -64.20488]}>
            <Popup>             
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
      <Box>
      
      </Box>

    </Flex>

  )

}

export default CustomMap
