import React from 'react'
import { Heading, Flex, VStack, Text, Image, Button, Box } from '@chakra-ui/react'
import { blogsdata } from '../data/blogsdata'

function Blogs() {
    return (
        <>
            <div className="main" id="blog" style={{ height: "60vh" }}>
                <VStack justify="center" pt={40}>
                    <Heading as="h1" textAlign="center" fontSize={55}>OUR BLOG</Heading>
                    <Text>Everything you should know about Sahayak</Text>
                </VStack>
            </div>
            <Flex direction={["column", "row"]} spacing="96px" justify="center" wrap="wrap" w="100%" >
                {/*Fetch blog data in flex*/}
                {blogsdata.map((items, key) => {
                    return (
                        <Box className="card" m={8} boxShadow="dark-lg" key={key}>
                            <Image width={["250", "400px"]} height="200px" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></Image>
                            <Box className="card" width={["250", "400px"]} height="max-content">
                                <VStack pt={6} pb={6} pl={2} pr={2} spacing="12px">
                                    <Text fontWeight="bold">{items.title} </Text>
                                    <Text>{items.more}</Text>
                                    <Button variant="outline" colorScheme="blue">View Here</Button>
                                </VStack>
                            </Box>
                        </Box>)
                }
                )}
            </Flex>
        </>
    )
}

export default Blogs
