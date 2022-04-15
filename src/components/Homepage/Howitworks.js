import { Stack, VStack, Box, Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as HelperSvg } from '../../Assets/helper.svg'
import { ReactComponent as HireSvg } from '../../Assets/hire.svg'


function Howitworks() {
    return (
        <div className="temp">
            <VStack pt={16}>
                <Heading as="h3">How it works?</Heading>
                <Stack direction={["column", "row"]}>
                    <VStack  p={[2, 6, 8]}>
                        <Box textAlign="center">
                            <Heading as="h5">Become helper and join us.</Heading>
                            <Text>Are you looking for a job in the field of our services? <br/>Join our team by filling your details and we will soon contact you back.</Text>
                        </Box>
                        <Flex justify="center">
                            <HelperSvg width="70%" height="400px"/>
                        </Flex>
                    </VStack>
                    <VStack p={[2, 6, 8]}>
                        <Box textAlign="center">
                            <Heading as="h5">Hire our helpers and workers</Heading>
                            <Text>Book our verified helpers for home, for business and get your works done.</Text>
                        </Box>
                        <Flex justify="center">
                            <HireSvg width="70%" height="400px" />
                        </Flex>
                    </VStack>
                </Stack>
            </VStack>
        </div>
    )
}

export default Howitworks
