import Image from 'next/image'

import { Box, BoxProps } from '@chakra-ui/layout'
import { motion } from 'framer-motion'

export default function Animacion() {
  const MotionBox = motion<BoxProps>(Box)
  return (
    <MotionBox
      display={['none', null, null, 'block']}
      pos="absolute"
      right={0}
      bottom={-2}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          x: -100,
        },
        animate: {
          opacity: [0, 0, 1],
          x: 0,
          transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
      }}
    >
      <Image
        src="/images/header_guitarra.png"
        alt="guitarra"
        width={450}
        height={800}
        layout="fixed"
      />
    </MotionBox>
  )
}
