import { HStack, IconButton, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {ReactComponent as Logosvg} from '../../Assets/logo.svg'
import {FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <Stack direction={["column", "row"]} width="100%" justify="center" pl={8} pr={8} pb={2}>
      <Logosvg/>
      <Spacer/>
      <HStack>
      <Text> 2021 © Sahayak. All Rights reserved.</Text>
      </HStack>
      <Spacer/>
      <HStack>
        <IconButton icon={<FaInstagram/>}></IconButton>
        <IconButton icon={<FaTwitter/>}></IconButton>
        <IconButton icon={<FaLinkedin/>}></IconButton>
      </HStack>
    </Stack>
  )
}

export default Footer
