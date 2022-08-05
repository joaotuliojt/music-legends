import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    green: '#2EF4CC',
    gray: '#C0C0C0',
    white: '#F1F0F0',
    dark: '#14061F',
  },
  fonts: {
    heading: `'GT Eesti Pro Display', sans-serif`,
    body: `'GT Eesti Pro Display', sans-serif`,
  },
})

export default theme
