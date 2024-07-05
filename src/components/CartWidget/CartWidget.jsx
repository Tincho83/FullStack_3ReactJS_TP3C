import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import Contexto from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { obtenerCantidad } = useContext(Contexto)
  const cantidadProductos = obtenerCantidad();

  return (
    <Flex m='14px' justify={'center'} align={'center'} className="cartItemCountIcon">
      <Link to='/carrito'><IoCartOutline />
      </Link>
      <Flex className="cartItemCount">
        <Link to='/carrito' className="cartItemCount">{cantidadProductos > 0 && (<span>{cantidadProductos}</span>)}
        </Link>

      </Flex>

    </Flex>
  )
}

export default CartWidget


