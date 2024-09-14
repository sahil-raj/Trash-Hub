import { Box, Button, Center, Input, Stack } from '@chakra-ui/react'
import React from 'react'

const SignUp = () => {
  return (
    <Box backgroundColor={'wheat'} height={"100%"} padding={40} mb={-96} bgImage={'/bg.jpg'} bgPosition='center' bgRepeat='no-repeat'>
      <Box height={"100%"} display={"flex"} alignItems={'center'} justifyContent={'center'} >
        <Box
          display='flex'
          flexDirection={'column'}
          gap={4}
          alignItems='center'
          justifyContent='center'
          width='33%'
          padding={4}
          borderWidth={2}
          borderRadius={'lg'}
          borderColor={"green"}
          py={12}
          bgColor={'limegreen'}
          bgPosition='center'  
          bgRepeat='no-repeat'
          color={'white'}
          fontWeight={'bold'}
        >
          <Center fontSize={30}><h1>Sign Up</h1></Center>
          <Stack align={'center'}>
            <Input color={'white'} variant='outline' placeholder='Email-ID' />
            <Input color={'white'} variant='outline' placeholder='Password' />
            <Button colorScheme='green'>Sign Up</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default SignUp