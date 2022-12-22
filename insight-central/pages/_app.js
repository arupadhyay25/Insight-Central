import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Homepage } from './Homepage/_homepage'


export default function App() {
  return (
    <ChakraProvider>
      <Homepage/>
    </ChakraProvider>
  )
}
