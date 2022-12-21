import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Homepage } from './_homepage'


export default function App() {
  return (
    <ChakraProvider>
      <Homepage/>
    </ChakraProvider>
  )
}
