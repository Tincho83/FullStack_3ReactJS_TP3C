import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Image, Card, Box, Divider, Grid, GridItem, ButtonGroup, Button, CardHeader, Text, Heading, Flex, CardBody, CardFooter, Stack, useBreakpointValue, useConst } from '@chakra-ui/react'

import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import Contexto from '../../context/CartContext';

const ItemDetail = ({ id, nombre, descripcion, categoria, marca, precio, envdisponible, stock, imagen, cantidadActualCarrito }) => {

    const [cant, establecerCantidad] = useState(0)
    const { agregarItem } = useContext(Contexto)
    const maximoDisponibleProducto = stock - cantidadActualCarrito

    let envio = "No";

    if (envdisponible == true) {
        envio = "Si"
    }

    const alAgregar = (cantidad) => {
        const item = { id, nombre, precio, imagen, stock }

        agregarItem(item, cantidad)
        if (cantidad > 1) {
            toast.success(`Agregaste ${cantidad} unidades.`, { position: "top-center", autoClose: 1400 });
        }
        else {
            toast.success(`Agregaste ${cantidad} unidad.`, { position: "top-center", autoClose: 1400 });
        }
        establecerCantidad(cantidad)
    }

    return (
        <Flex justify="center" align="center">
            <Card maxW='sm' className='CardItem'>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' className='ImgDetailPic' />
                    <Stack className='ItemData' mt='6' spacing='3'>
                        <Text>{categoria}</Text>
                        <Heading size='md'> {marca} {nombre} </Heading>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                        <Text color='blue.600' fontSize='1xl'>Disponibilidad: {stock}  &nbsp;&nbsp;&nbsp; Envio a Domicilio: {envio}</Text>
                        <Text color='blue.600' fontSize='1xl'>Cantidad en carrito: {cantidadActualCarrito}</Text>
                        <Text color='black.900' fontSize='19px'> {descripcion} </Text>
                    </Stack>
                </CardBody>
                <Flex className='ItemDetailCardText' color='blue.600' fontSize='1xl' align="center" justify="space-between">
                    {
                        cant > 0 ?
                            <Flex>
                                <ToastContainer />
                            </Flex>
                            :
                            <Flex>
                                <Divider />
                                <Flex align="center" justify="center" >
                                    <Text className='ItemDetailCantText'>Cantidad&nbsp;&nbsp;&nbsp;</Text>
                                    <ItemCount stock={stock} valorInicial={1} alAgregar={alAgregar} maximoDisponibleProducto={maximoDisponibleProducto} />
                                </Flex>
                                <ToastContainer />
                            </Flex>
                    }
                </Flex>
                <Divider />
                <CardFooter className='ItemDetailCardFooter' justify="center">
                    <Box>
                        {
                            cant > 0 ?
                                <Flex align="center" justify="center">
                                    <ButtonGroup spacing='3'>
                                        <Button className='itemButton' variant='solid' colorScheme='teal'> <Link to='/'> Seguir Comprando </Link> </Button>
                                    </ButtonGroup>
                                    <ButtonGroup spacing='3'>
                                        <Button className='itemButton' variant='solid' colorScheme='teal'> <Link to='/carrito'> Ir al Carrito </Link> </Button>
                                    </ButtonGroup>
                                </Flex>
                                :
                                <Flex align="center" justify="center">
                                    <ButtonGroup spacing='3'>
                                        <Button className='itemButton' variant='solid' colorScheme='teal'> <Link to='/'> Volver a todos los productos </Link> </Button>
                                    </ButtonGroup>
                                </Flex>
                        }
                    </Box>
                </CardFooter>

            </Card>
        </Flex>

    )
}

export default ItemDetail