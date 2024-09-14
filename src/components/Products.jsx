import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Text, Image, Button} from '@chakra-ui/react'
import placeHolder from "../assets/placeHolder.jpg"
export default function Products({title="Product Title", desc="Product Description", img }) {
  return (
 
   <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  paddingY={6}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img?img:placeHolder}
    alt='Product'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
        {desc}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        View QR Set
      </Button>
    </CardFooter>
  </Stack>
</Card>

  )
}
