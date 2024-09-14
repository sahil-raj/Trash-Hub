import React from 'react';
import { Box, Heading, Text, SimpleGrid, Stack } from '@chakra-ui/react';
import About from './About';
function AboutUs() {
  return (
    <Box py={16} px={8} bg="gray.50">

      <Stack spacing={4} textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" color="red.400">
          About TrashHub
        </Heading>
        <Text fontSize="lg" color="gray.600">
          TrashHub is a comprehensive platform for managing waste from source to end-of-lifecycle and recycling.
        </Text>
      </Stack>


      <SimpleGrid display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign="center">
        <Box rounded="lg" width={'70%'} display={'flex'} gap={5}>
          <About color="white" heading="Trash Tag" description=" Users can scan QR codes on products and merchant bins to earn rewards for proper disposal.
            Our backend server manages data on waste disposal and tracking of products."/>

          <About color="white" heading=" BinOcculars" description="  A user-friendly interface to find specific-purpose dustbins for waste like electronics, metal, etc.
            The backend server manages dustbin locations and waste types for users."/>

          {/* <About color="white" heading="LitterPatrol" description="  AI-powered system to identify and penalize individuals littering in public places. It tracks littering 
            instances and issues fines based on face or ID scans."/>

              <About color="white" heading="Recyc1X" description="  AI-powered system to identify and penalize individuals littering in public places. It tracks littering 
            instances and issues fines based on face or ID scans."/> */}
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default AboutUs;
