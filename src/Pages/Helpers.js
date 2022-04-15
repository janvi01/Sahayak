import React from 'react'
import { Heading, Flex, VStack, Text, Image, Button, Box, HStack, IconButton } from '@chakra-ui/react'
import { AiOutlinePhone } from 'react-icons/ai'
import { helperlist } from '../data/helperslist'

function Helpers() {
    return (
            <div className="main">
                <Heading as="h1" textAlign="center" p={8}>MEET OUR HELPERS</Heading>
                <Flex direction={["column", "row"]} spacing="96px" justify="center" wrap="wrap" w="100%" >
                    {/*Fetch and map user in flex*/}
                    {helperlist.map((items, key) => {
                        return (
                        <Box className="helpercard" key={key} boxSize="300px" shadow="dark-lg" m={[8,8, 16]}>
                            <VStack p={6} spacing="12px">
                                <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" boxSize="120px" borderRadius="50%"></Image>
                                <Text>Name : {items.name}</Text>
                                <Text>Role : {items.role}</Text>
                                <HStack spacing="24px">
                                    <Button variant="outline" colorScheme="blue">Book</Button>
                                    <IconButton icon={<AiOutlinePhone />} colorScheme="whiteAlpha"></IconButton>
                                </HStack>
                            </VStack>
                        </Box>)
                    })}
                </Flex>
            </div>
    )
}

export default Helpers
