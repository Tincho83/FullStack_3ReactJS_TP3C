import React, { useEffect, useState } from 'react'
import { Box, Divider, Flex, Heading, Text, useColorMode } from '@chakra-ui/react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { ClockLoader } from 'react-spinners'
import { db } from '../../config/firebase'
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = ({ title }) => {

  const { colorMode } = useColorMode();

  const [productos, setProductos] = useState([])

  const [cargando, establecerCargando] = useState(true)

  const { categoriaId } = useParams()
  //debugger;


  useEffect(() => {
    establecerCargando(true)
    const obtenerDatosNubeFireBase = async () => {
      const coleccion = collection(db, 'listaProductos')

      const consultaRefencia = !categoriaId ?
        coleccion
        :
        query(coleccion, where('categoria', '==', categoriaId))

      const respuesta = await getDocs(consultaRefencia)

      const respProductos = respuesta.docs.map((doc) => {
        const nuevoItem = {
          ...doc.data(),
          id: doc.id
        }
        return nuevoItem
      })

      setProductos(respProductos)
      establecerCargando(false)
    }
    obtenerDatosNubeFireBase()
  }, [categoriaId])

  return (
    <Flex justify={'center'}>
      <Box>
        <Text as='b' fontSize='16px' color='black' className='titulo'>{title}</Text>
        {
          cargando ?
            <Flex justify={'center'} align={'center'} h={'50hv'}>
              <ClockLoader color="#89BBFE" />
            </Flex>
            :
            <ItemList productoss={productos} className='listaItems' />
        }
      </Box>
    </Flex>
  )
}

export default ItemListContainer

/*    const datosProductos = categoriaId ? obtenerProductosporCategoria(categoriaId) : obtenerProductos()

    datosProductos
      .then((response) => setProductos(response))
      .catch((error) => console.log(error))
      .finally(() => establecerCargando(false))
*/