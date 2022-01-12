import Head from 'next/head'
import Link from 'next/link'
import type { GetServerSideProps, NextPage } from 'next'
import { Box, Button, Center, Heading } from '@chakra-ui/react'
import { Curso, Guitarras } from 'src/components'
import Posts from 'src/components/Post/Posts'

export const getServerSideProps: GetServerSideProps = async () => {
  const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL}/api/guitarras?populate=imagen&sort=createdAt:desc&pagination[limit]=6`
  const urlCurso = `${process.env.NEXT_PUBLIC_API_URL}/api/curso?populate=imagen`
  const urlPosts = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=imagen&sort=createdAt:desc&pagination[limit]=3`
  // Para hacer multiples peticiones al mismo tiempo
  // trae los datos en el orden en el cual las declaremos, es decir, traera primero las guitarras
  const [resGuitarras, resCurso, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlPosts),
  ])

  const [guitarras, curso, posts] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resPosts.json(),
  ])

  return {
    props: {
      guitarras: guitarras.data,
      curso: curso.data,
      posts: posts.data,
    },
  }
}

const Home: NextPage = ({ guitarras, curso, posts }: any) => {
  return (
    <Box as="main">
      <Head>
        <title>GuitarLab - Inicio</title>
      </Head>

      <Box as="section">
        <Heading as="h2" color="orange.400" textAlign="center">
          Nuestra Coleccion
        </Heading>

        <Guitarras guitarras={guitarras} />

        <Center mt="10">
          <Link href="/tienda" passHref>
            <Button colorScheme="orange" w="xs">
              Ver mas
            </Button>
          </Link>
        </Center>
      </Box>

      <Curso curso={curso} />

      <Box as="section">
        <Heading as="h2" color="orange.400" textAlign="center" mt="8">
          Blog
        </Heading>

        <Posts posts={posts} />
      </Box>
    </Box>
  )
}

export default Home
