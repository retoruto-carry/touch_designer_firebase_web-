import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'black',
        color: 'white',
      },
      html: {
        height: '100%',
      },
    },
  },
})
