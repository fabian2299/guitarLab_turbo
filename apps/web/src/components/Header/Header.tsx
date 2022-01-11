import { Box, Spacer, Stack } from '@chakra-ui/react'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
  return (
    <Box
      as="header"
      p="3"
      color="white"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgb(0 0 0 / 0.8),  rgb(0 0 0 / 0.7)), url(/images/header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: '50%',
      }}
    >
      <Stack direction="row" maxW={'container.xl'} mx="auto" align="center">
        <Logo />
        <Spacer />
        <Navbar />
      </Stack>
    </Box>
  )
}
