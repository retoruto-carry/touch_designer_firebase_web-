import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../theme'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
