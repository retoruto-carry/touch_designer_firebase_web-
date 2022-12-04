import {Box, Center, Container, Image} from '@chakra-ui/react'
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

  return (
    <Container>
      <Center h={'100vh'}>
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
        <Box
          onClick={() => {
            stampMutation.mutate({value: 1})
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
            src="https://pbs.twimg.com/profile_images/1362720299674861570/fDwmsAK0_400x400.png"
            alt={'send stamp 1'}
          />
        </Box>
      </Center>
    </Container>
  )
}
