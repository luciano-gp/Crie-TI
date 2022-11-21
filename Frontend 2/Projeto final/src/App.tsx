import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { SidebarDrawerProvider } from './components/contexts/SidebarDrawerContext';
import { Router } from './Router';
import { theme } from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default App
