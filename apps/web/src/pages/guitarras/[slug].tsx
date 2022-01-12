import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/guitarras?filters[slug]=${slug}&populate=imagen`,
  )
  const data = await res.json()

  return {
    props: { guitarra: data.data[0] },
  }
}

export default function GuitarraDetailsPage({ guitarra }: any) {
  const { imagen, slug, descripcion, nombre, precio } = guitarra.attributes
  const [cantidad, setCantidad] = useState(0)

  const handleChange = (e: any) => {
    setCantidad(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(cantidad)
  }

  return (
    <Box as="main">
      <Head>
        <title>{`GuitarLab - ${slug}`}</title>
      </Head>

      <SimpleGrid columns={2} spacing={10} alignItems="center" justify="center" mt="8" h="xl">
        <VStack pos="relative" h="full">
          <Image src={imagen.data.attributes.url} alt={nombre} layout="fill" objectFit="contain" />
        </VStack>

        <VStack p="3" justifyContent="space-around" alignItems="star" h="full">
          <Heading as="h3" fontSize="3xl" textTransform="uppercase" color="gray.700">
            {nombre}
          </Heading>

          <Text fontSize="lg" fontWeight={'medium'} noOfLines={4}>
            {descripcion}
          </Text>

          <Text color="orange" fontSize="5xl" fontWeight={'black'}>
            ${precio}
          </Text>

          <form className="space-y-8 max-w-xs">
            <FormControl>
              <HStack alignItems="center">
                <FormLabel fontSize="xl" htmlFor="cantidad">
                  Cantidad
                </FormLabel>
                <Select onChange={handleChange} id="cantidad" placeholder="Escoge una cantidad">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </HStack>
            </FormControl>

            <Button type="submit" colorScheme="orange" onClick={handleSubmit}>
              Agregar al carrito
            </Button>
          </form>
        </VStack>
      </SimpleGrid>
    </Box>
  )
}
