import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { formatearFecha } from 'src/lib'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.apiEndpoint}/api/blogs?populate=imagen`)
  const post = await res.json()

  const paths = post.data.map((post: any) => ({
    params: { slug: post.attributes.slug },
  }))

  console.log(paths)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as any
  const res = await fetch(
    `${process.env.apiEndpoint}/api/blogs?filters[slug]=${slug}&populate=imagen`,
  )
  const post = await res.json()

  return { props: { post: post.data[0] } }
}

export default function PostDetailsPage({ post }: any) {
  console.log(process.env.apiEndpoint)

  const { contenido, imagen, publishedAt, titulo } = post.attributes

  return (
    <Box>
      <Head>
        <title>{`GuitarLab - ${titulo}`}</title>
      </Head>

      <Heading as="h2" color="orange.400" textAlign="center">
        {titulo}
      </Heading>

      <article className="mx-auto max-w-3xl space-y-8 mt-5">
        <Image
          priority={true}
          src={imagen.data.attributes.url}
          alt={titulo}
          width={800}
          height={600}
          layout="responsive"
          className="rounded-lg"
        />

        <VStack p="3">
          <Text color="orange.500" fontWeight="bold">
            {formatearFecha(publishedAt)}
          </Text>
          <p className=" prose whitespace-pre-wrap text-xl">{contenido}</p>
        </VStack>
      </article>
    </Box>
  )
}
