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
import { useState, useEffect } from "react";
import axios from "axios";

export default function QROverlay({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const [qr, setQr] = useState([]);
  useEffect(() => {
    const x = async () => {
      let res = await axios.get(
        `https://trashtag.vercel.app/ecoperks/manufacturer/get_batch_qrset/${id}/api`
      );

      if (res.status == 200) {
        setQr(res.data);
      } else {
        alert("error");
      }
    };
    x();
  }, []);

  const btnRef = React.useRef(null);
  return (
    <div>
      <Button mt={3} ref={btnRef} onClick={onOpen} colorScheme="red">
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
              {qr.length > 0 &&
                qr.map((q, i) => {
                  return <QRCard key={q} qrData={q} qrHeading={i} qrText={q} />;
                })}
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button mx={2} colorScheme="red" onClick={()=>window.location.href = `https://trashtag.vercel.app/ecoperks/manufacturer/get_batch_qrset/${id}`}>Print QR Set</Button>
            <Button mx={2} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
