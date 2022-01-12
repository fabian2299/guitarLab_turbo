import { Box, Button, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export default function Curso({ curso }: any) {
  const { titulo, contenido, imagen } = curso.attributes

  return (
    <Box
      as="section"
      mt="10"
      p="5"
      h="md"
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.65), rgb(0 0 0 / 0.7)), url(${imagen.data.attributes.url})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
      }}
    >
      <Grid templateColumns={['1', null, 'repeat(2, 1fr)']} h="full">
        <GridItem colStart={2} alignSelf="center">
          <VStack color="white" spacing="10">
            <Heading>{titulo}</Heading>
            <Text>{contenido}</Text>
            <Link href="#" passHref>
              <Button colorScheme="orange" variant="outline">
                Mas informacion
              </Button>
            </Link>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  )
}
