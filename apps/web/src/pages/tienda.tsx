import Head from 'next/head'
import type { GetServerSideProps } from 'next'
import { Box, Heading } from '@chakra-ui/react'
import { Guitarras } from 'src/components'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/guitarras?populate=imagen&sort=createdAt:desc`,
  )
  const data = await res.json()

  return {
    props: { guitarras: data.data },
  }
}

export default function Tienda({ guitarras }: any) {
  return (
    <Box as="main">
      <Head>
        <title>GuitarLab - Tienda</title>
      </Head>

      <Heading as="h2" color="orange.400" textAlign="center">
        Nuestra Coleccion
      </Heading>

      <Guitarras guitarras={guitarras} />
    </Box>
  )
}
