import React, { useState } from 'react'
import { Button, ButtonGroup, Flex, Box } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = ({ stock, valorInicial, alAgregar, maximoDisponibleProducto }) => {
  const [count, setCount] = useState(valorInicial)

  const incrementar = () => {
    count < maximoDisponibleProducto && setCount(count + 1)
  }

  const decrementar = () => {
    if (count > valorInicial) {
      count <= maximoDisponibleProducto && setCount(count - 1);
    }

  }

  const agregarAlCarrito = () => {
    alAgregar(count);
    setCount(1); // Establecer count de vuelta a 1 después de agregar al carrito
  };

  return (
    <Flex>
      {
        maximoDisponibleProducto !== 0 ?
          <Flex>
            <Flex className='botonesContarProd'>
              <Button colorScheme='blue' size='sm' variant='outline' onClick={decrementar} >-</Button>
              <Box id='boxCant'>
                {count}
              </Box>
              <Button colorScheme='blue' size='sm' variant='outline' onClick={incrementar} >+</Button>
            </Flex>
            <Button size='sm' className='botonAgregarCarrito' onClick={agregarAlCarrito}>Agregar a Carrito</Button>
          </Flex>
          :
          <Flex>
            <Flex className='botonesContarProd'>
              <Button colorScheme='red' size='sm' variant='outline' onClick={decrementar} isDisabled>-</Button>
              <Box id='boxCant'>
                {count - 1}
              </Box>
              <Button colorScheme='red' size='sm' variant='outline' onClick={incrementar} isDisabled>+</Button>
            </Flex>
            <Button size='sm' className='botonAgregarCarrito' onClick={() => alAgregar(count)} isDisabled>Agregar a Carrito</Button>
          </Flex>
      }
    </Flex >
  )
}

export default ItemCount

