import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Grid,
    Button
  } from '@chakra-ui/react'
import QRCard from './QRCard'
export default function QROverlay() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
    const btnRef = React.useRef(null)
  return (
    <div>
      

      <Button mt={3} ref={btnRef} onClick={onOpen} colorScheme='red'>
        View QR set
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        
      >
        <ModalOverlay/>
        
        <ModalContent maxH={"500px"} maxW={"900px"} >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
                <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
               
              </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
