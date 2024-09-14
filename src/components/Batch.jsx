import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Text, Image, Button} from '@chakra-ui/react'
import placeHolder from "../assets/placeHolder.jpg"
export default function Batch({title="1", img }) {
  return (

   <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  paddingY={2}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '150px'  }}
    src={img?img:placeHolder}
    padding={6}
    alt='Product'
  />

  <Stack >
    <CardBody>
      <Heading size='md'>Batch {title}</Heading>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='red' >
        View QR set
      </Button>
    </CardFooter>
  </Stack>
</Card>

  )
}
