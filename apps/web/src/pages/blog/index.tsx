import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { Post } from 'src/components'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=imagen`)
  const data = await res.json()

  return {
    props: { data },
    revalidate: 60,
  }
}

export default function Blog({ data }: any) {
  return (
    <Box>
      <Head>
        <title>GuitarLab - Blog</title>
      </Head>

      <Heading as="h2" color="orange.400" textAlign="center">
        Blog
      </Heading>

      <SimpleGrid columns={[1, 2, null, 3]} gap="10" mt="8">
        {data.data.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
