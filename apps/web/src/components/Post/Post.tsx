import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from 'src/lib'

export default function Post({ post }: any) {
  const { titulo, resumen, imagen, publishedAt } = post.attributes
  const { id } = post
  return (
    <article className="hover:scale-105 transition-all duration-300 ease-in-out  rounded-xl overflow-hidden border border-gray-400">
      <Image
        priority={true}
        src={imagen.data.attributes.url}
        alt="imagen post"
        width={800}
        height={600}
        layout="responsive"
      />

      <VStack p="5" spacing="5" h="2xs">
        <Heading as="h3" fontSize="2xl">
          {titulo}
        </Heading>
        <Text color="orange.500" fontWeight="bold">
          {formatearFecha(publishedAt)}
        </Text>
        <Text noOfLines={2}>{resumen}</Text>
        <Link href={`/blog/${id}`} passHref>
          <Button colorScheme="orange">Leer Entrada</Button>
        </Link>
      </VStack>
    </article>
  )
}
