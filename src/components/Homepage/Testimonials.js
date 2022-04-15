import React from 'react'
import { Flex, Box, VStack, Image, Text, Heading } from '@chakra-ui/react'
import { testimonialsdata } from '../../data/testimonialsdata'

function Testimonials() {
    return (
        <>
            <Heading textAlign="center">Testimonials</Heading>
            <Flex direction={["column", "row"]} spacing="96px" justify="center" wrap="wrap" w="100%" >
                {testimonialsdata.map((items, key) => {
                    return (
                        <Box className="testimonial" key={key} width={["330px", "400px"]} height="400px" shadow="dark-lg" m={[4,4,8]} borderRadius="20px">
                            <VStack p={6} spacing="12px">
                                <Image src={items.url} boxSize="120px" borderRadius="50%"></Image>
                                <Text>{items.main} </Text>
                                <Text fontWeight="bold">{items.name} </Text>
                            </VStack>
                        </Box>
                    )
                })}
            </Flex>
        </>
    )
}

export default Testimonials
