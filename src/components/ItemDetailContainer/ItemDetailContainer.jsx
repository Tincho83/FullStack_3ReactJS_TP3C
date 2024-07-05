import React, { useEffect, useState } from 'react'

import { obtenerProductosporID } from '../../data/datos'
import { Box, Flex } from '@chakra-ui/react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import { ClockLoader } from 'react-spinners'
import { db } from '../../config/firebase'
import { getDoc, doc } from 'firebase/firestore'
import { useContext } from 'react'
import Contexto from '../../context/CartContext'

const ItemDetailContainer = () => {

  const [producto, establecerProducto] = useState({})
  const [cargando, establecerCargando] = useState(true)
  const { productoId } = useParams()

  const { cantidadActualCarrito } = useContext(Contexto)
  const navigate = useNavigate()

  useEffect(() => {
    establecerCargando(true)
    const obtenerDatosNubeFireBase = async () => {
      
      const consultaRefencia = doc(db, 'listaProductos', productoId)
      
      const respuesta = await getDoc(consultaRefencia)
      

      const nuevoItem = {
        ...respuesta.data(),
        id: respuesta.id
      }


      establecerProducto(nuevoItem)
      establecerCargando(false)
    }
    obtenerDatosNubeFireBase()

  }, [])

  return (
    <Flex className='ItemDetailContainer' justify={'center'}>
      <Box>
        {
          cargando ?
            <Flex justify={'center'} align={'center'} h={'50hv'}>
              <ClockLoader color="#89BBFE" />
            </Flex>
            :
            <ItemDetail {...producto} cantidadActualCarrito={cantidadActualCarrito(productoId)} />

        }
      </Box>
    </Flex>
  )
}

export default ItemDetailContainer