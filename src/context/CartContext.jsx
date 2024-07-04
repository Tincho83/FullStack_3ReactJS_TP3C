import { setIndexConfiguration } from 'firebase/firestore'
import React, { createContext, useState } from 'react'

const Contexto = createContext()

export const CartContextProvider = ({ children }) => {

    const [carrito, establecerCarrito] = useState([])

    const agregarItem = (productoParaAgregar, cantidad) => {
        const nuevoItem = { ...productoParaAgregar, cantidad }

        if (productoEnCarrito(nuevoItem.id)) {
            const carritoActualizado = carrito.map((prod) => {
                if (prod.id === nuevoItem.id) {
                    return { ...prod, cantidad: prod.cantidad + nuevoItem.cantidad }
                }
                return prod
            })
            establecerCarrito(carritoActualizado)
        }
        else {
            establecerCarrito([...carrito, nuevoItem])
        }
    }

    const productoEnCarrito = (id) => {
        return carrito.some((prod) => prod.id === id)
    }

    const obtenerTotal = () => {
        return carrito.reduce((valorActual, item) => valorActual + item.precio * item.cantidad, 0)
    }

    const obtenerCantidad = () => {
        return carrito.reduce((cantActual, item) => cantActual + item.cantidad, 0)
    }


    const decrementarCantItem = (id) => {
        const carritoActualizado = carrito.map((prod) => {
            if (prod.id === id) {
                const nuevaCantidad = Math.max(prod.cantidad - 1, 1)
                return { ...prod, cantidad: nuevaCantidad }
            }
            return prod
        })
        establecerCarrito(carritoActualizado)
    }

    const incrementarCantItem = (id, stock) => {
        const carritoActualizado = carrito.map((prod) => {
            if (prod.id === id) {
                const nuevaCantidad = Math.min(prod.cantidad + 1, stock)
                return { ...prod, cantidad: nuevaCantidad }
            }
            return prod
        })
        establecerCarrito(carritoActualizado)
    }

    const cantidadActualCarrito = (id) => {
        const prod = carrito.find((item) => item.id === id)
        return prod ? prod.cantidad : 0
    }

    const borrarItem = (id) => {
        const carritoActualizado = carrito.filter((prod) => prod.id !== id)
        establecerCarrito([...carritoActualizado])
    }

    const vaciarCarrito = () => {
        establecerCarrito([])
    }

    return (
        <Contexto.Provider value={{
            carrito, establecerCarrito, agregarItem, borrarItem, vaciarCarrito, obtenerCantidad,
            obtenerTotal, incrementarCantItem, decrementarCantItem, cantidadActualCarrito
        }}>
            {children}
        </Contexto.Provider>
    )
}

export default Contexto
