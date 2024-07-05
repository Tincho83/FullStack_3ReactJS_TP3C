import { Box, Button, Flex, Heading, useColorMode, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Contexto from '../../context/CartContext'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { carrito, borrarItem, vaciarCarrito, obtenerTotal, incrementarCantItem, decrementarCantItem } = useContext(Contexto)
    const cantProdCarrito = carrito.length;
    const { colorMode } = useColorMode();

    return (
        <div>
            <Heading color={colorMode === 'light' ? 'gray.800' : 'gray.200'}>Carrito de compras</Heading>

            <TableContainer>
                {
                    cantProdCarrito > 0 ?
                        <Table variant='striped' colorScheme='teal'>
                            <TableCaption>Contenido del carrito de usuario</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th textAlign="center">Producto</Th>
                                    <Th textAlign="center">Precio $</Th>
                                    <Th textAlign="center"></Th>
                                    <Th textAlign="center">Cantidad Total</Th>
                                    <Th textAlign="center">SubTotal</Th>
                                    <Th textAlign="center">Acciones</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    carrito.map((prod) => (
                                        <CartItem key={prod.id} producto={prod} borrarItem={borrarItem} incrementarCantItem={incrementarCantItem} decrementarCantItem={decrementarCantItem} />
                                    ))
                                }
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th> <Button onClick={() => vaciarCarrito()}> Vaciar Carrito </Button> </Th>
                                    <Th> <Heading>Total: $ {obtenerTotal()} </Heading> </Th>
                                    <Th> <Button > <Link to='/finalizarcompra'> Finalizar Compra </Link> </Button> </Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                        :
                        <Table>
                            <Thead>
                                <Tr>
                                    <Td textAlign="center"><Heading color={'red'}> Sin Productos Agregados. </Heading></Td>                                    
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                <Td textAlign="center"><Text color={'red'}> Vuelva al catalogo de productos para realizar una compra. </Text></Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th> <Button > <Link to='/'> Ir a Todos los Productos </Link> </Button> </Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                }

            </TableContainer>
        </div >
    )
}

// Componente de elemento de producto del carrito
const CartItem = React.memo(({ producto, borrarItem, incrementarCantItem, decrementarCantItem }) => {
    return (
        <Tr>
            <Td>
                <Flex alignItems="center">
                    <Box mr={4}>
                        <img src={producto.imagen} alt={producto.nombre} style={{ width: '96px', height: '96px' }} />
                    </Box>
                    <Box>
                        <Text>{producto.nombre}</Text>
                    </Box>
                </Flex>
            </Td>
            <Td textAlign="center"> $ {producto.precio} </Td>
            <Td textAlign="center">
                <Flex alignItems="center">
                    <Button onClick={() => decrementarCantItem(producto.id)} >-</Button>
                    <Text marginRight={2} marginLeft={2}>{producto.cantidad}</Text>
                    <Button onClick={() => incrementarCantItem(producto.id, producto.stock)} >+</Button>
                </Flex>
            </Td>
            <Td textAlign="center"> {producto.cantidad} </Td>
            <Td textAlign="center">{producto.precio * producto.cantidad}</Td>
            <Td textAlign="center"> <Button onClick={() => borrarItem(producto.id)}> <MdDeleteForever /> </Button> </Td>
        </Tr>
    );
});

export default Cart


