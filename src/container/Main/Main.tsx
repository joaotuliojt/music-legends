import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'

export function Main() {
  return (
    <Box
      bgImage={`url('./assets/wallpaper.jpg')`}
      bgRepeat="no-repeat"
      w="full"
      minH={'100vh'}
      bgSize="cover"
      position={'relative'}
    >
      <Box position={'absolute'} bottom={'14.25rem'} left={'15rem'}>
        <Image src="./assets/logo-lol.svg" w={'15rem'} />
        <Text
          color={'gray'}
          fontWeight={500}
          marginTop="1.5rem"
          fontSize={'1.5rem'}
          letterSpacing={'4%'}
        >
          RIOT GAMES
        </Text>
        <Flex
          alignItems={'center'}
          gap="4"
          color={'gray'}
          fontWeight="400"
          mt="2rem"
        >
          <Button w={10} p="0" bg="gray" borderRadius={'full'}>
            <Image
              src="./assets/small-arrow-left.svg"
              pos={'absolute'}
              top="50%"
              left="50%"
              transform={'translate(-50%, -50%)'}
            />
          </Button>
          <Text>1/20</Text>
          <Button w={10} p="0" bg="white" borderRadius={'full'}>
            <Image
              src="./assets/small-arrow-right.svg"
              pos={'absolute'}
              top="50%"
              left="50%"
              transform={'translate(-50%, -50%)'}
            />
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
