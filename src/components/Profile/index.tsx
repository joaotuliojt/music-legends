import { Flex, Text, Box } from '@chakra-ui/react'

interface ProfileProps {
  userImageUrl?: string
  name: string
}
export function Profile({
  userImageUrl = 'https://avatars.githubusercontent.com/u/78704415?s=400&u=e508e96279b42585fad59a4f43f24687ec9a4126&v=4',
  name,
}: ProfileProps) {
  return (
    <Flex alignItems="center" gap="4">
      <Text fontSize={'1.125rem'}>{name}</Text>
      <Box
        borderRadius={90}
        w={12}
        h={12}
        bg={
          'linear-gradient(90.35deg, #4AC08F 2.49%, #2FB4FF 101.2%, #2FB4FF 101.2%);'
        }
        p="3px"
      >
        <Box
          w={'full'}
          h="full"
          bgImage={`url(${userImageUrl})`}
          bgPos="center"
          bgSize={'cover'}
          borderRadius="full"
        />
      </Box>
    </Flex>
  )
}
