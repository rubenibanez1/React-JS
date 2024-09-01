import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  )
}
export default App;