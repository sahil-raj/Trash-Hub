import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import placeHolder from "../assets/placeHolder.jpg";
import { useNavigate } from "react-router-dom";

export default function Products({ title = "Product Title", img }) {
  const navigate = useNavigate();

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      paddingY={6}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={img ? img : placeHolder}
        alt="Product"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
        </CardBody>

        <CardFooter>
          <Button
            onClick={() => navigate("/Batches")}
            variant="solid"
            colorScheme="red"
          >
            View all batches
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
