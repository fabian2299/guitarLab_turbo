import { Box, Heading } from '@chakra-ui/react'
import Head from 'next/head'

export default function Tienda() {
  return (
    <Box as="main">
      <Head>
        <title>GuitarLab - Tienda</title>
      </Head>

      <Heading as="h2" color="orange.400" textAlign="center">
        Tienda
      </Heading>
    </Box>
  )
}
