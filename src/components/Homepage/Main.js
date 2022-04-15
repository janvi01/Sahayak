import { Box, Stack, Heading, Text, Flex, Button, VStack, } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Workersvg } from '../../Assets/workers.svg'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className="homemain">
            <Stack direction={["column", "row"]} pt={[4, 16, 40]} height="100%">
                <Box textAlign="center" p={8}>
                    <VStack mb={8}>
                    <Heading as="h1" fontSize={["45px", "90px"]}>SAHAYAK</Heading>
                    <Text>Wanna Find a reliable helper service or ready to provide service showcasing your skills?</Text>
                    <Text fontWeight="bold">Sahayak is happy to help!</Text>
                    </VStack>
                    <Flex justify="center">
                        <Stack direction={["column", "row"]} justify="center" spacing="20px" >
                            <Link to="/helpers"><Button size="lg" colorScheme="blackAlpha" >Find Helper</Button></Link>
                            <Link to="/joinourteam"><Button size="lg" colorScheme="blackAlpha">Join our team</Button></Link>
                        </Stack>
                    </Flex>
                </Box>
                <Flex justify="center" height="100%">
                    <Workersvg height="70%"/>
                </Flex>
            </Stack>

        </div>
    )
}

export default Main
