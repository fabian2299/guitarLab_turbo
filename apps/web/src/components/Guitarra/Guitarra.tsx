import { Button, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Guitarra({ guitarra }: any) {
  const { imagen, slug, descripcion, nombre, precio } = guitarra.attributes
  return (
    <SimpleGrid columns={2} h="md">
      <VStack pos="relative">
        <Image src={imagen.data.attributes.url} alt={nombre} layout="fill" objectFit="contain" />
      </VStack>

      <VStack p="3" justifyContent="space-around" alignItems="star">
        <Heading as="h3" fontSize="3xl" textTransform="uppercase" color="gray.700">
          {nombre}
        </Heading>

        <Text fontSize="lg" fontWeight={'medium'} noOfLines={4}>
          {descripcion}
        </Text>

        <Text color="orange" fontSize="5xl" fontWeight={'black'}>
          ${precio}
        </Text>

        <Link href={`/guitarras/${slug}`} passHref>
          <Button colorScheme="orange">Ver Producto</Button>
        </Link>
      </VStack>
    </SimpleGrid>
  )
}
