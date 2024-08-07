import React, { useState } from 'react'
import './Header.css'
import reactLogo from '../../assets/imagenes/mitiendaonline.png'
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, Heading } from '@chakra-ui/react'
import { MenuGroup, MenuOptionGroup, MenuDivider, Spacer, useColorMode, Button } from '@chakra-ui/react'
import { IconButton, Icon, createIcon, Image, Text, Switch, Input } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { IoMdMenu, IoMdAdd, IoMdHelpCircleOutline, IoMdSearch } from "react-icons/io";
import { IoCartOutline, IoMoonOutline } from "react-icons/io5";
import { MdAccountBox, MdOutlineLiveHelp, MdOutlineCreditCard } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import { TbTruckDelivery, TbWorldSearch } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiPlanetConquest } from "react-icons/gi";


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box id='inicio'>
            <Flex h={'14hv'} w={'100%'} align={'center'} className='flexboxNavBar' id='flexboxNavBarC' backgroundColor={colorMode === 'light' ? '#CAE5FF' : '#6F8AB7'}>
                <ChakraLink href='https://www.correoargentino.com.ar/' isExternal marginLeft={'25px'} marginRight={'5px'}><Flex align="center"> <TbTruckDelivery />Segui tu compra</Flex></ChakraLink>
                <ChakraLink href='#' isExternal marginLeft={'25px'} marginRight={'5px'}><Flex align="center"> <MdAccountBox />Contacto</Flex></ChakraLink>
                <ChakraLink href='#' isExternal marginLeft={'25px'} marginRight={'5px'}><Flex align="center"> <FaMapMarkedAlt />Sucursales</Flex></ChakraLink>
                <ChakraLink href='#' isExternal marginLeft={'25px'} marginRight={'5px'}><Flex align="center"> <MdOutlineCreditCard />Financiacion</Flex></ChakraLink>
                <ChakraLink href='#' isExternal marginLeft={'25px'} marginRight={'5px'}><Flex align="center"> <MdOutlineLiveHelp />Ayuda</Flex></ChakraLink>
                <ChakraLink href='https://www.nationalgeographicla.com/medio-ambiente/2023/04/dia-de-la-tierra-10-acciones-sustentables-que-puedes-realizar-para-cuidar-el-planeta' isExternal marginLeft={'25px'} marginRight={'5px'}><Flex align="center"> <GiPlanetConquest />Cuidemos el Planeta</Flex></ChakraLink>
            </Flex>

            <Flex h={'14hv'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={colorMode === 'light' ? '#CAE5FF' : '#6F8AB7'} className='flexboxNavBar' id='flexboxNavBarD'>
                <Menu className='menuHeader'>
                    <MenuButton as={IconButton} aria-label='Options' icon={<IoMdMenu />} variant='outline' className='botonMenu'>
                        Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem icon={<MdAccountBox />} command='' className='botonMenuItem'>
                            Mi Cuenta
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <RouterLink to='/'>
                                <Flex align="center"> <GrCatalog />Productos</Flex>
                            </RouterLink>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <RouterLink to='/carrito'>
                                <Flex align="center"> <IoCartOutline />Mi Carrito</Flex>
                            </RouterLink>
                        </MenuItem>
                        <MenuItem icon={<IoMdHelpCircleOutline />} command='' className='botonMenuItem'>
                            Ayuda
                        </MenuItem>
                        <MenuItem className='botonMenuItem'>
                            <ChakraLink href='https://www.bing.com' isExternal>
                                <Flex align="center"> <TbWorldSearch /> Bing</Flex>
                            </ChakraLink>
                        </MenuItem>
                        <MenuDivider />
                        MH Version 2024
                    </MenuList>
                </Menu>
                <ChakraLink href='/' marginLeft={'25px'} marginRight={'5px'}> <img src={reactLogo} alt="Logo Mi tienda Online" className='imglogo'></img></ChakraLink>
                <Heading color={colorMode === 'light' ? '#6F8AB7' : '#CAE5FF'} fontSize={'x-large'} m='10px'>Mi Tienda Online</Heading>
                <Flex align="center">Modo Noche&nbsp; <Switch colorScheme='teal' size='sm' isChecked={colorMode === 'dark'} onChange={toggleColorMode} /></Flex>
            </Flex>
        </Box>
    )
}

export default Header
