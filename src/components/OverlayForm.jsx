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

export default function OverlayForm({title="Create Product", Desc="Product Name",place="Kurkure"}) {
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
      <Button colorScheme='red' size='lg'
        
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        {title}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Enter {Desc}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input variant='filled' placeholder={place} />
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" spacing={4}>
            <Button  onClick={onClose}>Cancel</Button>
            <Button colorScheme='red' >Submit</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
