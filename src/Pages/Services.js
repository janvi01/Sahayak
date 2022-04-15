import { Heading, Flex, Text } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Cook } from '../../src/Assets/service/cook.svg'
import { ReactComponent as Driver } from '../Assets/service/driver.svg'
import { ReactComponent as Helpersvg } from '../Assets/service/helper.svg'
import { ReactComponent as Maid } from '../Assets/service/maid.svg'
import { ReactComponent as MaidM } from '../Assets/service/maidmale.svg'
function Services() {
    return (
        <div className="main">
            <Heading as="h1" textAlign="center" pt={8}>SERVICES</Heading>
            <Flex direction={["column", "row"]} spacing="96px" justify="center" wrap="wrap" w="100%" >
                <VStack className="sbox" boxSize="250px" m={16} shadow="dark-lg" justify="center" p={4}><Cook width="100%"/><Text color="black">Cook</Text></VStack>
                <VStack className="sbox" boxSize="250px" m={16} shadow="dark-lg" justify="center" p={4}><Driver width="100%"/><Text color="black">Driver</Text></VStack>
                <VStack className="sbox" boxSize="250px" m={16} shadow="dark-lg" justify="center" p={4}><Helpersvg width="100%"/><Text color="black">Helper</Text></VStack>
                <VStack className="sbox" boxSize="250px" m={16} shadow="dark-lg" justify="center" p={4}><Maid width="100%"/><Text color="black">Maid Woman</Text></VStack>
                <VStack className="sbox" boxSize="250px" m={16} shadow="dark-lg" justify="center" p={4}><MaidM width="100%"/><Text color="black">Maid Man</Text></VStack>
            </Flex>
        </div>
    )
}

export default Services
