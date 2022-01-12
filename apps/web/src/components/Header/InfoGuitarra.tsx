import Link from 'next/link'
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'

export default function InfoGuitarra({ guitarra }: any) {
  const { nombre, descripcion, precio, slug } = guitarra.data.attributes

  return (
    <Box maxW={'container.xl'} mx="auto" my="8">
      <VStack w="xl" align="start" spacing="10">
        <Heading as="h2" fontSize="6xl" fontWeight="black">
          Modelo {nombre}
        </Heading>

        <Text noOfLines={3} fontSize="xl" fontWeight="semibold">
          {descripcion}
        </Text>

        <Text fontSize="5xl" fontWeight="black" color="orange">
          ${precio}
        </Text>

        <Link href={`/guitarras/${slug}`} passHref>
          <Button colorScheme="orange">Ver Producto</Button>
        </Link>
      </VStack>
    </Box>
  )
}
