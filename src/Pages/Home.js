import React from 'react'
import Main from '../components/Homepage/Main'
import Howitworks from '../components/Homepage/Howitworks'
import Testimonials from '../components/Homepage/Testimonials'
import Joinourteam from '../components/Homepage/Joinourteam'
import { VStack } from '@chakra-ui/react'

function Home() {
    return (
        <div className="home">
            <VStack spacing="24">
            <Main />
            <Howitworks />
            <Testimonials />
            <Joinourteam/>
            </VStack>
        </div>
    )
}

export default Home
