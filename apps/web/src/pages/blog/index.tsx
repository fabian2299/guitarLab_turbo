import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { Box, Heading } from '@chakra-ui/react'
import Posts from 'src/components/Post/Posts'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=imagen&sort=createdAt:desc`,
  )
  const posts = await res.json()

  return {
    props: { posts: posts.data },
    revalidate: 60,
  }
}

export default function Blog({ posts }: any) {
  return (
    <Box as="main">
      <Head>
        <title>GuitarLab - Blog</title>
      </Head>

      <Heading as="h2" color="orange.400" textAlign="center">
        Blog
      </Heading>

      <Posts posts={posts} />
    </Box>
  )
}
