import { Box, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { links } from 'src/lib/links'

export default function Navbar() {
  return (
    <nav className="relative z-50">
      <HStack spacing="10">
        {links.map(link => (
          <Box key={link.id}>
            <Link href={link.href}>
              <a className="text-lg font-black uppercase hover:bg-orange-400 p-1 duration-300 ease-in-out transition-all will-change-auto rounded-lg">
                {link.name}
              </a>
            </Link>
          </Box>
        ))}
      </HStack>
    </nav>
  )
}
