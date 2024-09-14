import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export default function OverlayForm({
  title = "Create Product",
  Desc = "Product Name",
  place = "Kurkure",
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="70%"
      backdropBlur="2px"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const toast = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    const res = await axios.post(
      `https://trashtag.vercel.app/ecoperks/manufacturer/create_product`,
      {
        manufacturer_id: localStorage.getItem("userId"),
        product_name: name,
      }
    );
    if (res.status == 200) {
      onClose();
    } else {
      toast("Server Error Occurred");
    }
    setLoading(false);
  };

  return (
    <div>
      <Button
        colorScheme="red"
        size="lg"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
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
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              variant="filled"
              placeholder={place}
            />
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" spacing={4}>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                isLoading={loading}
                onClick={handleSubmit}
                colorScheme="red"
              >
                Submit
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
