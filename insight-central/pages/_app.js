import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Homepage } from '../Components/Homepage/_homepage'
import { Singlepage } from '../Components/Singlepage/_singlepage'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
       {/* <Singlepage/> */}
      {/* <Homepage/> */}
    </ChakraProvider>
  )
}
