import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Theme from './chackra/theme'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyles from './chackra/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={Theme}>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
