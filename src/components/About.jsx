import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
export default function About(props) {
  return (
    <div>
      <Box bg={props.color} p={6} borderRadius="lg" boxShadow="md" transition="transform 0.3s ease-in-out"  _hover={{
            transform: "scale(1.1)" ,outline:"1px solid red"}} >
        <Heading as="h3" size="md" mb={4} color="red.400">
          {props.heading}
        </Heading>
        <Text color="gray.600">{props.description}</Text>
      </Box>
    </div>
  );
}
