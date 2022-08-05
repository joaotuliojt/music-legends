/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function Player() {
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(
    new Audio(
      '../../../public/musics/Warriors Season 2020 Cinematic - League of Legends (ft. 2WEI and Edda Hayes).mp3'
    )
  )

  const { duration } = audioRef.current

  async function playMusic() {
    setIsPlaying(true)
    audioRef.current.play()
  }

  useEffect(() => {
    setInterval(() => {
      const { currentTime } = audioRef.current
      setTrackProgress(currentTime)
    }, 1000)
  }, [])

  return (
    <Box
      as={motion.div}
      animate={{ y: [100, 0], transition: { duration: 1.2 } }}
      w={'full'}
      h="6.25rem"
      bg="dark"
      position={'absolute'}
      bottom="0"
      left={0}
      zIndex={10}
      display="flex"
      alignItems={'center'}
      pl="6.25rem"
      pr="6.25rem"
      className="test"
      justifyContent="space-between"
    >
      <Box
        top="0"
        left={0}
        pos="absolute"
        w={'100vw'}
        transform="translateY(-45%)"
      >
        <Slider
          defaultValue={0}
          value={trackProgress ? trackProgress : 0}
          max={duration ? duration : 0}
          maxH="2px"
          maxW={'99.6%'}
        >
          <SliderTrack>
            <SliderFilledTrack bg="linear-gradient(90.35deg, #4AC08F 2.49%, #2FB4FF 101.2%, #2FB4FF 101.2%);" />
          </SliderTrack>
          <SliderThumb boxSize={4} bg="green">
            <Box filter={'blur(16px)'} bg="green" w="8" h="8" />
          </SliderThumb>
        </Slider>
      </Box>
      <Flex alignItems={'center'} gap="2.62rem">
        <Button w={'1.8rem'} h="1.8rem" p="0">
          <Image src="./assets/heart.svg" />
        </Button>
        <Box fontWeight={500}>
          <Text color={'white'} fontSize="1.5rem">
            Warriors
          </Text>
          <Text color={'gray'} textTransform="uppercase" fontSize="1.125rem">
            Riot games ft. Imagine Dragons
          </Text>
        </Box>
      </Flex>

      <Flex gap={'6.25rem'} alignItems="center">
        <IconButton
          aria-label="repeat music"
          icon={<Image src="./assets/repeat.svg" />}
          transition={'0.25s'}
          _hover={{
            filter: 'brightness(0.8)',
          }}
        />

        <Flex alignItems="center" gap={'2.25rem'}>
          <IconButton
            aria-label="back"
            icon={<Image src="./assets/arrow-left.svg" />}
            transition={'0.25s'}
            _hover={{
              filter: 'brightness(0.8)',
            }}
          />
          <Box
            w="3rem"
            h="3rem"
            bg="#200C30"
            borderRadius={'full'}
            pos="relative"
            transition={'0.25s'}
            _hover={{
              bg: 'grey',
            }}
          >
            <IconButton
              aria-label="Play music"
              icon={<Image src="./assets/play.svg" />}
              pos="absolute"
              left={'50%'}
              top="50%"
              transform={'translate(-45%, -50%)'}
              onClick={playMusic}
            />
          </Box>
          <IconButton
            aria-label="skip"
            icon={<Image src="./assets/arrow-right.svg" />}
            transition={'0.25s'}
            _hover={{
              filter: 'brightness(0.8)',
            }}
          />
        </Flex>

        <IconButton
          aria-label="rotate"
          icon={<Image src="./assets/rotate-cw.svg" />}
          transition={'0.25s'}
          _hover={{
            filter: 'brightness(0.8)',
          }}
        />
      </Flex>
      <Flex gap={'5.2rem'}>
        <IconButton
          aria-label="mute"
          icon={<Image src="./assets/volume.svg" />}
          transition={'0.25s'}
          _hover={{
            filter: 'brightness(0.8)',
          }}
        />
        <IconButton
          aria-label="full screen"
          icon={<Image src="./assets/minimize.svg" />}
          transition={'0.25s'}
          _hover={{
            filter: 'brightness(0.8)',
          }}
        />
      </Flex>
    </Box>
  )
}
