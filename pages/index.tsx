import {Box, Center, Container, Image} from '@chakra-ui/react'
import React from 'react'
import {motion} from 'framer-motion'
import {useDatabaseSetMutation} from "@react-query-firebase/database";
import {push, ref} from "firebase/database";
import {database} from "../firebase/index"

export default function HomePage() {
  const dbRef = ref(database, `messages`);
  const newMessageRef = push(dbRef)
  const mutation = useDatabaseSetMutation(newMessageRef);

  return (
    <Container>
      <Center h={'100vh'}>
        <Box
          onClick={() => {
            mutation.mutate({name: "retca"})
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
            alt={'push me'}
          />
        </Box>
      </Center>
    </Container>
  )
}
