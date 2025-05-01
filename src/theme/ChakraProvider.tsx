
import React from 'react';
import { ChakraProvider as ChakraUIProvider, extendTheme } from '@chakra-ui/react';

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    skillPurple: '#9b87f5',
    skillPurpleLight: '#a797f7',
    skillCyan: '#38B2AC',
    skillBlack: '#0d0d0d',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  styles: {
    global: {
      body: {
        bg: '#0d0d0d',
        color: 'white',
      }
    }
  }
});

interface ChakraProviderProps {
  children: React.ReactNode;
}

export const ChakraProvider: React.FC<ChakraProviderProps> = ({ children }) => {
  return (
    <ChakraUIProvider theme={theme}>
      {children}
    </ChakraUIProvider>
  );
};
