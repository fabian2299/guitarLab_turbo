import { useRouter } from 'next/router'
import useSWR from 'swr'

import { Box, Spacer, Stack } from '@chakra-ui/react'

import Logo from './Logo'
import Navbar from './Navbar'
import InfoGuitarra from './InfoGuitarra'
import Animacion from './Animacion'

const urlGuitarra = `${process.env.NEXT_PUBLIC_API_URL}/api/guitarras/10?populate=imagen`
const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Header() {
  const { data } = useSWR(urlGuitarra, fetcher)
  const router = useRouter()
  const inicio = router.pathname === '/'

  return (
    <Box
      as="header"
      p="3"
      pos="relative"
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

      {data && inicio && <InfoGuitarra guitarra={data} />}

      {inicio && <Animacion />}
    </Box>
  )
}
