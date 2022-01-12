import { SimpleGrid } from '@chakra-ui/react'
import Guitarra from './Guitarra'

export default function Guitarras({ guitarras }: any) {
  return (
    <SimpleGrid columns={[1, null, null, 2, 3]} gap={8} mt="10">
      {guitarras.map((guitarra: any) => (
        <Guitarra key={guitarra.id} guitarra={guitarra} />
      ))}
    </SimpleGrid>
  )
}
