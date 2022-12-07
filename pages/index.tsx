import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import {motion} from 'framer-motion'
import {useDatabaseSetMutation} from '@react-query-firebase/database'
import {push, ref} from 'firebase/database'
import {database} from '../firebase/index'
import {FaTwitter} from 'react-icons/fa'

export default function HomePage() {
  const dbHeartRef = ref(database, `hearts`)
  const newHeartRef = push(dbHeartRef)
  const heartMutation = useDatabaseSetMutation(newHeartRef)

  const dbStampRef = ref(database, `stamps`)
  const newStampRef = push(dbStampRef)
  const stampMutation = useDatabaseSetMutation(newStampRef)

  const stamps = ['最高', 'ちら', 'エモい', 'ありまと', 'love']

  const shareText = `\n#中村さんそクラスタと繋がりたい`
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}`

  return (
    <Container
      fontFamily={'DotGothic16'}
      sx={{
        height: '100vh',
        '&': {
          height: '100svh',
        },
      }}
    >
      <Center h={'full'}>
        <VStack spacing={8}>
          <VStack spacing={4}>
            <Heading size={'md'} fontFamily={'DotGothic16'}>
              #中村さんそクラスタと繋がりたい
            </Heading>
            <Button
              href={twitterLink}
              target={'_blank'}
              size={'sm'}
              as={'a'}
              colorScheme={'twitter'}
              leftIcon={<Icon as={FaTwitter}/>}
            >
              Tweet
            </Button>
          </VStack>
          <SimpleGrid columns={2} m={2} spacing={4}>
            {stamps.map((stampName, index) => {
              return (
                <Box
                  key={stampName}
                  onClick={() => {
                    stampMutation.mutate({value: index + 1})
                  }}
                  _focus={{boxShadow: 'none'}}
                  as={motion.button}
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  cursor={'pointer'}
                >
                  <Image
                    boxSize="150px"
                    objectFit="cover"
                    src={`/images/stamps/${stampName}.png`}
                    alt={`${stampName}`}
                  />
                </Box>
              )
            })}
            <Box
              onClick={() => {
                heartMutation.mutate({value: 1})
              }}
              _focus={{boxShadow: 'none'}}
              as={motion.button}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              cursor={'pointer'}
            >
              <Image
                boxSize="150px"
                objectFit="cover"
                src="/images/heart.png"
                alt={'send heat'}
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  )
}
