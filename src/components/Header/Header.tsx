import { Box, Container, Heading } from '@chakra-ui/react'
import { Nav } from '../Nav/Nav'
import { Profile } from '../Profile'

export function Header() {
  return (
    <Box
      w="100vw"
      h={24}
      bg="dark"
      position={'absolute'}
      top={0}
      left={0}
      as="header"
      zIndex={10}
    >
      <Container
        maxW="container.xl"
        color={'gray'}
        h={'100%'}
        display="flex"
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Nav />
        <Heading color={'white'}>MUSIC LEGENDS</Heading>
        <Profile name="Joao Túlio" userImageUrl="" />
      </Container>
    </Box>
  )
}
