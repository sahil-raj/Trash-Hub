import React from "react";
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
  Button,
} from "@chakra-ui/react";
import QRCard from "./QRCard";

export default function QROverlay({ id }) {
  console.log(id);
  const { isOpen, onClose } = useDisclosure();
  const [scrollBehavior] = React.useState("inside");

  const btnRef = React.useRef(null);
  return (
    <div>
      <Button
        mt={3}
        ref={btnRef}
        onClick={() => {
          window.open(
            `https://trashtag.vercel.app/ecoperks/manufacturer/get_batch_qrset/${id}`,
            "_blank"
          );
        }}
        colorScheme="red"
      >
        View QR set
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />

        <ModalContent maxH={"500px"} maxW={"900px"}>
          <ModalHeader>QR Set</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              <QRCard qrHeading="heading" qrData="abcd" qrText="apple" />
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
