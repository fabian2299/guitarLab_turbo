import { Button, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="grid place-content-center min-h-[60vh] space-y-8">
      <Head>
        <title>GuitarLab - 404</title>
      </Head>

      <Heading as="h2" color="orange.400" textAlign="center">
        Lo sentimos
      </Heading>

      <Text fontSize="xl">Pagina no encontrada 404</Text>

      <Link href="/" passHref>
        <Button as="a" colorScheme="orange">
          ir al Inicio
        </Button>
      </Link>
    </div>
  )
}
