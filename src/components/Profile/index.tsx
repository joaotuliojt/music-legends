import { Flex, Text, Box } from '@chakra-ui/react'

interface ProfileProps {
  profile_url: string
  name: string
}
export function Profile({ profile_url, name }: ProfileProps) {
  return (
    <Flex alignItems="center" gap="4">
      <Text>{name}</Text>
      <Box borderRadius={90} w={12} h={12} bg={'blackAlpha.600'}></Box>
    </Flex>
  )
}
