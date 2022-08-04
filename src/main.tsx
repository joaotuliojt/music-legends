import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Theme from './chackra/theme'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from './chackra/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={Theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
