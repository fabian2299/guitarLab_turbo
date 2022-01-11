import Link from 'next/link'
import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import { links } from 'src/lib/links'

export default function Footer() {
  return (
    <footer className="bg-black p-5 text-white">
      <Flex direction="row" maxW="container.xl" mx="auto" align="center">
        <nav>
          <HStack spacing="10">
            {links.map(link => (
              <Box key={link.id}>
                <Link href={link.href}>
                  <a className="text-lg font-black uppercase hover:text-orange-400 p-1 duration-300 ease-in-out transition-all will-change-auto">
                    {link.name}
                  </a>
                </Link>
              </Box>
            ))}
          </HStack>
        </nav>
        <Spacer />
        <Text fontSize="lg" fontWeight={'bold'}>
          Todos los derechos reservados
        </Text>
      </Flex>
    </footer>
  )
}
