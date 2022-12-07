import {Box, Center, Container, Heading, Image, SimpleGrid, VStack} from '@chakra-ui/react'
import React from 'react'
import {motion} from 'framer-motion'
import {useDatabaseSetMutation} from "@react-query-firebase/database";
import {push, ref} from "firebase/database";
import {database} from "../firebase/index"

export default function HomePage() {
  const dbHeartRef = ref(database, `hearts`);
  const newHeartRef = push(dbHeartRef)
  const heartMutation = useDatabaseSetMutation(newHeartRef);

  const dbStampRef = ref(database, `stamps`);
  const newStampRef = push(dbStampRef)
  const stampMutation = useDatabaseSetMutation(newStampRef);

  const stamps = ["最高", "ちら", "エモい", "ありまと", "love",]

  return (
    <Container
      sx={{
        height: "100vh",
        "&": {
          height: "100svh"
        }
      }}>
      <Center h={"full"}>
        <VStack spacing={8}>
          <Heading size={"lg"}>
            #中村さんと繋がりたい
          </Heading>
          <SimpleGrid columns={2} m={2} spacing={4}>
            {
              stamps.map((stampName, index) => {
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
              })
            }
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
