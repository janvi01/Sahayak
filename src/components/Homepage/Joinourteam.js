import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';

export default function Joinourteam() {
  return (
    <div className="temp">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Join our team</Heading>
            <Text fontSize={'lg'} color={'blackAplha.600'}>
              See how we can help change your future 🤝
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg="white" color="black"
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="name" onSubmit={() => alert("We will soon contact you back")}>
                <FormLabel>Name</FormLabel>
                <Input type="text" colorScheme="teal" />
              </FormControl>
              <FormControl id="number">
                <FormLabel>Contact Number</FormLabel>
                <Input type="tel" />
              </FormControl>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input type="text" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Join us
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}