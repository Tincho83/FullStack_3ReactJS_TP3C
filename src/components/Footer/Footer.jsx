import { Box, Flex, Text, Image, useColorMode, useBreakpointValue, Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'
import CustomMap from '../CustomMap/CustomMap'
import './Footer.css'

const Footer = () => {
  const direccion = useBreakpointValue({ base: "column", md: "row" });

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className="piepagina" backgroundColor={colorMode === 'light' ? '#CAE5FF' : '#6F8AB7'}>

      {/* Icono Flotante subir */}
      <Box className='piepagina_divflotantesubir'>
        <ChakraLink href='#inicio'>
          <img src="https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/subir.png?alt=media&token=7fce0ded-c74c-494e-a1df-7deaf76c21a6" alt="ir a inicio superior de la pagina"
            className='piepagina_divflotante_imgsubir' />
        </ChakraLink>
      </Box>

      {/* Icono Flotante WhatsApps */}
      <Box className='piepagina_divflotantewts'>
        <ChakraLink href='https://api.whatsapp.com/send?phone=5435156056156&text=%C2%A1Hola%21+Estoy+en+la+tienda+y+quiero+pedir+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0' isExternal>
          <img src="https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/whatsapp.png?alt=media&token=0550d6ad-88f7-45c4-9e6c-d89a8dff8721" alt="ir a Contacto Whastapp"
            className='piepagina_divflotante_imgWhatsapps' />
        </ChakraLink>
      </Box>

      <Flex direction={direccion} wrap="wrap" className='piepagina_contacto' justify={'center'}  >

        {/* Datos de Contacto */}
        <Box id='contacto' className='piepagina_divcontacto'>
          <h2 className='piepagina_divcontacto_h2infocontacto'> Informacion de Contacto</h2>
          <Text className='piepagina_divcontacto_pinfocontacto' as='b'>Contacto:</Text>

          <Box className='cajaContacto'>
            <ul className='piepagina_divcontacto_ulInfoContacto'>
              <li className='piepagina_divcontacto_ulInfoContacto_li'>
                <Flex justify={'center'} align={'center'} h={'50hv'}>
                  <Image src='https://tiendavirtual62310.infinityfreeapp.com/tel.png' alt='Telefono de Contacto' className='piepagina_divcontacto_ulInfoContacto_li_img' boxSize='32px' objectFit='cover' />
                  <Text className='piepagina_divcontacto_ulInfoContacto_li_img_p' as='b'>Telefono/FAX: +543514350620</Text>
                </Flex>
              </li>
              <li className='piepagina_divcontacto_ulInfoContacto_li'>
                <Flex justify={'center'} align={'center'} h={'50hv'}>
                  <Image src='https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/correo.png?alt=media&token=0f79b6f6-7910-4c18-8dfd-717225860958' alt='Correo de Contacto' className='piepagina_divcontacto_ulInfoContacto_li_img' boxSize='32px' objectFit='cover' />
                  <Text className='piepagina_divcontacto_ulInfoContacto_li_img_p' as='b'>Correo Electronico: io@io.com</Text>
                </Flex>
              </li>
              <li className='piepagina_divcontacto_ulInfoContacto_li'>
                <Flex justify={'center'} align={'center'} h={'50hv'}>
                  <Image src='https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/whatsapp.png?alt=media&token=0550d6ad-88f7-45c4-9e6c-d89a8dff8721' alt='Contacto Whatsapps' className='piepagina_divcontacto_ulInfoContacto_li_img' boxSize='32px' objectFit='cover' />
                  <Text className='piepagina_divcontacto_ulInfoContacto_li_img_p' as='b'>+543515625625 </Text>
                </Flex>
              </li>
              <li className='piepagina_divcontacto_ulInfoContacto_li'>
                <Flex justify={'center'} align={'center'} h={'50hv'}>
                  <Image src='https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/telegram.png?alt=media&token=ae48dc58-b15c-44f6-9f00-1a50169f036a' alt='Contacto Telegram' className='piepagina_divcontacto_ulInfoContacto_li_img' boxSize='32px' objectFit='cover' />
                  <Text className='piepagina_divcontacto_ulInfoContacto_li_img_p' as='b'>+543515625625 </Text>
                </Flex>
              </li>
              <li className='piepagina_divcontacto_ulInfoContacto_li'>
                <Flex justify={'center'} align={'center'} h={'50hv'}>
                  <Image src='https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/linkedin.png?alt=media&token=7606ccfa-8ae9-42e2-b29b-a17baa1b05b3' alt='Contacto Linkedin' className='piepagina_divcontacto_ulInfoContacto_li_img' boxSize='32px' objectFit='cover' />
                  <Text className='piepagina_divcontacto_ulInfoContacto_li_img_p' as='b'>io@io.com  </Text>
                </Flex>
              </li>
            </ul>
          </Box>

        </Box>

        {/* info de Ubicacion y Horario  */}
        <Box id='sucursales' className='piepagina_horariocontacto'>
          <Text className='piepagina_divcontacto_pinfocontacto' as='b'>Horario de Atencion:</Text>

          <Box className='cajaContacto'>
            <ul className='piepagina_divcontacto_ulInfoContacto'>
              <li className='piepagina_divcontacto_ulInfoContacto_li'>
                <Flex justify={'center'} align={'center'} h={'50hv'}>
                  <Image src='https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/sucursal.png?alt=media&token=37bbf355-346d-42fc-bdbe-4645fc5e69e7' alt='Domicilio' className='piepagina_divcontacto_ulInfoContacto_li_img' boxSize='32px' objectFit='cover' />
                  <Text className='piepagina_divcontacto_ulInfoContacto_li_img_p' as='b'> Domicilio: Calle 96 Nro 3200  </Text>
                </Flex>
              </li>
              <li className='piepagina_divcontacto_ulInfoContacto_li'>
                <Flex justify={'center'} align={'center'} h={'50hv'}>
                  <Image src='https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/horario.png?alt=media&token=7e4c97cf-63cf-4e17-bd19-a7cedb39a8a1' alt='Horario' className='piepagina_divcontacto_ulInfoContacto_li_img' boxSize='32px' objectFit='cover' />
                  <Text className='piepagina_divcontacto_ulInfoContacto_li_img_p' as='b'> Lunes a Viernes de 09:00hs a 19:00hs </Text>
                </Flex>
              </li>
            </ul>
          </Box>



        </Box>
        {/* info de Ubicacion y Horario  */}
        <Box id='Ubicacion' className='piepagina_divLocacion' >
          <Text className='piepagina_divcontacto_pinfocontacto' as='b'>Ubicacion:</Text>
          {/* Ubicacion componente leaflet  */}
          <CustomMap />

          {/* Ubicacion iframe de Google Maps  */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.8265253272374!2d-64.205205794486!3d-31.412363056071168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298830933ad09%3A0xb72fd713f4c77c4e!2sNuevocentro%20Shopping!5e0!3m2!1ses!2sar!4v1696125647399!5m2!1ses!2sar"
            className='piepagina_divLocacion_iframeUbicacion'> </iframe>  */}
        </Box>

      </Flex>

      {/* info de ayuda y suscripcion  */}
      <Box className='piepagina_divSuscripcion' justify={'center'} align={'center'} h={'50hv'}>
        <ChakraLink href="pages/ayuda.html" className='cabecera_divEnlacesHorizontales_ul_li_a' >
          <Image className='piepagina_divSuscripcion_img-AyudaTermCondicion' boxSize='32px' objectFit='cover' src='https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/ayuda.png?alt=media&token=ddffa9d7-bc48-47a4-a26b-8c9c2d365d48' alt='ayuda' />
          <Text className='piepagina_divSuscripcion_img-AyudaTermCondicion_p'>Ayuda</Text>
        </ChakraLink>

        <ChakraLink href="pages/terminoscond.html" className='cabecera_divEnlacesHorizontales_ul_li_a' >
          <Image className='piepagina_divSuscripcion_img-AyudaTermCondicion' boxSize='32px' objectFit='cover' src='https://firebasestorage.googleapis.com/v0/b/tiendaonline-77694.appspot.com/o/ayuda.png?alt=media&token=ddffa9d7-bc48-47a4-a26b-8c9c2d365d48' alt='Terminos y Condiciones' />
          <Text className='piepagina_divSuscripcion_img-AyudaTermCondicion_p'>Terminos y Condiciones</Text>
        </ChakraLink>

        <Box className='piepagina_divSuscripcion_divSuscripcionMail'>
          <Box>
            <label htmlFor="email" className='piepagina_divSuscripcion_divSuscripcionMail_label'>
              <span className='piepagina_divSuscripcion_divSuscripcionMail_label_span'>Suscribirse a
                Novedades:</span></label>
            <input type="email" id="email" name="email" placeholder="correo@dominio.com"
              className='piepagina_divSuscripcion_divSuscripcionMail_inputMail' />
            <input type="submit" value="Suscribirse"
              className='piepagina_divSuscripcion_divSuscripcionMail_inputBTNMail' />
          </Box>
        </Box>

      </Box>

      {/* Datos de desarrollador Web   */}
      <Box className='piepagina_divDatos'>
        <Text as='b'>Derechos Reservados (C) Martin Hernandez 2024</Text>
      </Box>

    </Box>
  )
}

export default Footer
