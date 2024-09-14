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
  id = null,
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
  const [size, setSize] = React.useState(0);

  const toast = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    let res;
    if (title === "Create new batch") {
      res = await axios.post(
        `https://trashtag.vercel.app/ecoperks/manufacturer/create_batch`,
        {
          manufacturer_id: localStorage.getItem("userId"),
          product_id: id,
          size: Number(size),
        }
      );
    } else {
      res = await axios.post(
        `https://trashtag.vercel.app/ecoperks/manufacturer/create_product`,
        {
          manufacturer_id: localStorage.getItem("userId"),
          product_name: name,
        }
      );
    }
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
            {title === "Create new batch" && (
              <Input
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                marginTop={5}
                variant="filled"
                placeholder={"Batch Size"}
              />
            )}
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
