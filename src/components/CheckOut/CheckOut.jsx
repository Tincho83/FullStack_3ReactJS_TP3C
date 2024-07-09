import React, { useContext, useState } from 'react'
import Contexto from '../../context/CartContext'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex, Input, Center, Heading, Button, useRadio, useColorMode, Box, Text, Image } from '@chakra-ui/react'
import { addDoc, collection, getDoc, doc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import './CheckOut.css'

const CheckOut = () => {
    const [usuario, establecerUsuario] = useState({
        nombres: '',
        direccion: '',
        correoe: '',
        confirmcorreoe: '',
        telcel: ''
    })

    const { colorMode } = useColorMode();

    const [error, establecerError] = useState({})
    const [cargando, establecerCargando] = useState(false)
    const { carrito, obtenerTotal, vaciarCarrito } = useContext(Contexto)
    const navegador = useNavigate()
    const actualizarUsuario = (event) => {
        establecerUsuario((usuario) => ({
            ...usuario,
            [event.target.name]: event.target.value
        }))
    }

    const validarCamposForm = () => {
        const erroresDetectados = {}

        if (!usuario.nombres) {
            erroresDetectados.nombres = "Se debe agregar como minimo un Nombre."
        } else if (usuario.nombres.length < 3) {
            erroresDetectados.nombres = "Se debe agregar un Nombre con al menos 3 caracteres."
        }

        if (!usuario.direccion) {
            erroresDetectados.direccion = "Se debe agregar como minimo un domicilio."
        } else if (usuario.direccion.length < 3) {
            erroresDetectados.direccion = "Se debe agregar un domicilio valido. Ej: Caseros, Calle 9 3200, Pje Quiros 7600"
        }

        if (!usuario.correoe) {
            erroresDetectados.correoe = 'Se debe agregar un correo electronico.'
        } else if (!/\S+@\S+\.\S+/.test(usuario.correoe)) {
            erroresDetectados.correoe = 'Debe ingresar un correo electronico valido.'
        }

        if (!usuario.confirmcorreoe) {
            erroresDetectados.confirmcorreoe = 'Debe ingresar el correo electronico que haya informado.'
        } else if (usuario.confirmcorreoe !== usuario.correoe) {
            erroresDetectados.confirmcorreoe = 'El correo electrónico de confirmación no coincide.';
        }

        if (!usuario.telcel) {
            erroresDetectados.telcel = 'Se debe agregar un número de teléfono Ej. [Caract Prov] espacio [numero de telefono o celular]';
        } else if (!/^[\d\s]+$/.test(usuario.telcel)) {
            erroresDetectados.telcel = 'Debe ingresar solo números y espacios en el teléfono.';
        }

        establecerError(erroresDetectados)
        return Object.keys(erroresDetectados).length === 0

    }

    const obtenerPedido = async () => {
        if (!validarCamposForm()) {
            return
        }

        if (carrito.length === 0) {
            Swal.fire({
                title: "Carrito de compras vacio.",
                text: `No se puede procesar una orden con el carrito vacio.`,
                icon: "error",
                confirmButtonText: "Ir a Catalogo de Productos",
            }).then(() => {
                navegador('/')
            });
        }

        const coleccion = collection(db, 'pedidos')

        try {
            for (const item of carrito) {
                const documentoReferencia = doc(db, 'listaProductos', item.id)
                const productoDocumento = await getDoc(documentoReferencia)

                const actualStock = productoDocumento.data().stock

                if (actualStock >= item.cantidad) {
                    await updateDoc(documentoReferencia, { stock: actualStock - item.cantidad })

                } else {
                    Swal.fire({
                        title: "Stock insuficiente del producto.",
                        text: `Sin cantidad de stock disponible ${item.nombre}`,
                        icon: "error",
                        confirmButtonText: "Ir a Catalogo de Productos",
                    }).then(() => {
                        navegador('/')
                    });
                }
            }


            const pedido = {
                comprador: usuario,
                carritocompras: carrito,
                total: obtenerTotal(),
                fecha: Timestamp.now()
            }

            const pedidoReferencia = await addDoc(coleccion, pedido)

            Swal.fire({
                title: "Compra Realizada",
                text: `Gracias por su compra ${usuario.nombres}. El pedido ${pedidoReferencia.id} estara disponible para retirar en las proximas 2 horas. Se enviara la factura por el monto de $ ${obtenerTotal()} pesos al correo electronico ${usuario.correoe}. Te esperamos nuevamente.`,
                icon: "success",
                confirmButtonText: "Ir a Catalogo de Productos",
            }).then(() => {
                vaciarCarrito();
                navegador('/')
            });
        }
        catch (error) {
            Swal.fire({
                title: "Ha ocurrido un error.",
                text: `error: ${error}`,
                icon: "error",
                confirmButtonText: "Ir a Catalogo de Productos",
            }).then(() => {
                vaciarCarrito();
                navegador('/')
            });
        }
    }

    return (
        <Center className='carritoDetalle'   backgroundColor={colorMode === 'light' ? '#CAE5FF' : '#6F8AB7'}>
            <Flex direction={'column'} align={'center'} justify={'center'} >
                <Heading>Productos que vas a comprar</Heading>
                <Flex>
                    {
                        carrito.map((prod, index) => (
                            <Flex key={prod.id} backgroundColor={'blue.200'} alignItems="center" p={4} mb={4} boxShadow="md" borderRadius="md">
                                <Image src={prod.imagen} alt={prod.descripcion} className='imagenDetalle' />
                                <Box>
                                    <Text>{prod.nombre}</Text>
                                    <Text>Cantidad: {prod.cantidad}</Text>
                                    <Text>Total: ${prod.precio * prod.cantidad}</Text>
                                </Box>
                            </Flex>
                        ))
                    }
                </Flex>
                <Box mt={4} mb={8}>
                    <Text fontSize="xl" color={'blue'}>Total de la compra: ${obtenerTotal()}</Text>
                </Box>

                <Heading>Completa tus datos</Heading>
                <Flex w={'100%'} justify={'center'} align={'center'}>
                    <FormControl w={'100%'} isInvalid={Object.keys(error).length > 0}>
                        <FormLabel>Nombre/s y Apellido:</FormLabel>
                        <Input type='text' name='nombres' placeholder='Nombre Apellido' onChange={actualizarUsuario} />
                        <FormErrorMessage>{error.nombres}</FormErrorMessage>
                        <FormLabel>Domicilio:</FormLabel>
                        <Input type='text' name='direccion' placeholder='Calle 123' onChange={actualizarUsuario} />
                        <FormErrorMessage>{error.direccion}</FormErrorMessage>
                        <FormLabel>Correo Electronico:</FormLabel>
                        <Input type='email' name='correoe' placeholder='usuario@dominio.com' onChange={actualizarUsuario} />
                        <FormErrorMessage>{error.correoe}</FormErrorMessage>
                        <FormLabel>Confirmar Correo Electronico:</FormLabel>
                        <Input type='email' name='confirmcorreoe' placeholder='usuario@dominio.com' onChange={actualizarUsuario} />
                        <FormErrorMessage>{error.confirmcorreoe}</FormErrorMessage>
                        <FormLabel>Telefono de Contacto:</FormLabel>
                        <Input type='text' name='telcel' placeholder='0351 153430796' onChange={actualizarUsuario} />
                        <FormErrorMessage>{error.telcel}</FormErrorMessage>
                        <FormHelperText>Todos los campos son obligatorios.</FormHelperText>
                        <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                </Flex>
                <Button mt={3} onClick={obtenerPedido}>
                    Finalizar Compra
                </Button>
            </Flex>
        </Center>
    )
}

export default CheckOut
