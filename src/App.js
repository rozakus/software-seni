import React from 'react';

// UI
import { ChakraProvider, theme } from '@chakra-ui/react';

// Pages
import HomePage from './pages/HomePage'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
