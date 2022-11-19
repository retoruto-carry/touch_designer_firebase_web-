import { Box, Center, Container, Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <Container>
      <Center h={'100vh'}>
        <Box
          _focus={{ boxShadow: 'none' }}
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          cursor={'pointer'}
        >
          <Image
            boxSize="150px"
            objectFit="cover"
            src="https://pbs.twimg.com/profile_images/1362720299674861570/fDwmsAK0_400x400.png"
            alt={'push me'}
          />
        </Box>
      </Center>
    </Container>
  )
}
