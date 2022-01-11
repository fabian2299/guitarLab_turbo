import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>GuitarLab - Inicio</title>
      </Head>

      <Heading as="h2" color="orange.400" textAlign="center">
        Incio
      </Heading>
    </Box>
  )
}

export default Home
