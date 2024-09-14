import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import placeHolder from "../assets/placeHolder.jpg";
import QROverlay from "./QROverlay";

export default function Batch({ title = "1", img, size }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      paddingY={2}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "150px" }}
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
  );
}
