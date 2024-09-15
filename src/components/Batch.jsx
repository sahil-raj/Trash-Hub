import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import placeHolder from "../assets/placeHolder.jpg";
import QROverlay from "./QROverlay";

export default function Batch({ title = "1", img, size }) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        paddingY={2}
        my={"1rem"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={img ? img : placeHolder}
          padding={6}
          alt="Product"
        />

        <Stack>
          <CardBody>
            <Heading size="md">Batch {title}</Heading>
            <Text>Size: {size}</Text>
          </CardBody>

          <CardFooter>
            <QROverlay id={title} />
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
}
