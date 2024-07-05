import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Image, Card, Box, Divider, Grid, GridItem, ButtonGroup, Button, CardHeader, Text, Heading, Flex, CardBody, CardFooter, Stack, useBreakpointValue } from '@chakra-ui/react'

import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, categoria, marca, precio, envdisponible, stock, imagen }) => {
    let envio = false;

    if (envdisponible == true) {
        envio = "Si"
    }

    // Determinar el mensaje de disponibilidad
    let disponibilidadMsg = '';
    let verDetalle = true;
    let msgColor = 'red.500';

    if (stock <= 0) {
        disponibilidadMsg = 'Sin stock';
        msgColor = 'black';
        verDetalle = false;        
    } else if (stock <= 3) {
        disponibilidadMsg = 'Poca disponibilidad';
        verDetalle = true;
    }

    return (
        <Flex justify="center" align="center">
            <Card maxW='sm' className='CardItem'>
                <Flex position='relative'>
                    {disponibilidadMsg && (
                        <Text position='absolute' top={2} right={2} bg={msgColor} color={msgColor === 'black' ? 'white' : 'yellow'} px={2} py={1} borderRadius='md' fontSize='sm'>
                            {disponibilidadMsg}
                        </Text>
                    )}
                </Flex>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' className='ImgPic' />
                    <Stack className='ItemData' mt='6' spacing='3'>
                        <Text>{categoria}</Text>
                        <Heading size='md'>{nombre} {marca}</Heading>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='ItemCardFooter'>
                    <Box>
                        {verDetalle ? (
                            <ButtonGroup spacing='32'>
                                <Button className='detalleItemButton' variant='solid' colorScheme='blue'>
                                    <Link to={`/producto/${id}`}>Ver Detalle</Link>
                                </Button>
                            </ButtonGroup>
                        ) : (
                            <Button className='detalleItemButton' variant='solid' colorScheme='blue' isDisabled>
                                Ver Detalle
                            </Button>
                        )}
                    </Box>
                </CardFooter>
            </Card>
        </Flex>
    )
}

export default Item
