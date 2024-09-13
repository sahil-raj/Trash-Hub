import React from 'react'
import { Box, Heading, Text} from '@chakra-ui/react';
export default function About(props) {
  return (
    <div>
       <Box bg={props.color} p={6} borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="md" mb={4} color="red.400">
           {props.heading}
          </Heading>
          <Text color="gray.600">
           {props.description}
          </Text>
        </Box>
    </div>
  )
}
