import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Stack,
  Input
} from '@chakra-ui/react'

export default function OverlayForm() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='70%'
      backdropBlur='2px'
    />
  )

  const [overlay, setOverlay] = React.useState(<OverlayTwo />)

  return (
    <div>
      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        Click for overlay
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Enter Product Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input variant='filled' placeholder='Kurkure' />
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" spacing={4}>
            <Button  onClick={onClose}>Cancel</Button>
            <Button colorScheme='red'>Submit</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
