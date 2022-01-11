import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'

export default function Nosotros() {
  return (
    <Box as="main" my="10">
      <Head>
        <title>GuitarLab - Nosotros</title>
      </Head>

      <Heading as="h2" color="orange.400" textAlign="center">
        Nosotros
      </Heading>

      <SimpleGrid columns={[1, 2]} spacing={10} alignItems="center" justify="center" mt="8">
        <Image
          src="/images/nosotros.jpg"
          alt="imagen sobre nosotros"
          width={600}
          height={450}
          layout="responsive"
          className="rounded-xl"
        />

        <VStack spacing="10">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit illum odio nobis,
            unde corrupti. Enim expedita aliquid cumque facilis dolorem reiciendis voluptatem.
            Perspiciatis aperiam consequuntur non explicabo, accusantium facilis! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Ipsam asperiores itaque et fugit consequatur
            aperiam ipsum aut porro dignissimos, natus autem rem voluptatibus similique est tempore
            dolorum. Est, velit ea.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit illum odio nobis,
            unde corrupti. Enim expedita aliquid cumque facilis dolorem reiciendis voluptatem.
            Perspiciatis aperiam consequuntur non explicabo, accusantium facilis! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quidem sit nisi neque quae debitis modi beatae
            eos, tempore recusandae quisquam suscipit! Asperiores, architecto? Nobis, eligendi!
            Perferendis maxime temporibus iure nam.
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  )
}
