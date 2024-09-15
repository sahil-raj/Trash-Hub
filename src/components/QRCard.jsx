import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Button,
  CardFooter,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { QRCodeSVG } from "qrcode.react";

const QRCard = ({ qrHeading = "?", qrText, qrData, styleClass }) => {
  return (
    <Card maxW="sm" align="center" textAlign="center">
      <CardBody>
        <QRCodeSVG
          value={qrData}
          className={styleClass ? styleClass : "w-12 h-12"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{qrHeading ? qrHeading : ""}</Heading>
          <Text>{qrText ? qrText : ""}</Text>
        </Stack>
      </CardBody>
      <Divider width="90%" />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(qrData);
            }}
            variant="ghost"
            colorScheme="blue"
          >
            Copy
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default QRCard;
