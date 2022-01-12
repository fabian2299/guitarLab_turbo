import { SimpleGrid } from '@chakra-ui/react'
import { Post } from '..'

export default function Posts({ posts }: any) {
  return (
    <SimpleGrid columns={[1, 2, null, 3]} gap="10" p="8">
      {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </SimpleGrid>
  )
}
