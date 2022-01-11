import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=imagen`)
  const post = await res.json()

  const paths = post.data.map((post: any) => ({
    params: { id: String(post.id) },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as any
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}?populate=imagen`)
  const post = await res.json()

  return { props: { post } }
}

export default function PostDetailsPage({ post }: any) {
  console.log(post)

  return (
    <div>
      <h1>hola</h1>
    </div>
  )
}
