import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import ShoppingCart from "../assets/ShoppingCart.png";
import { useNavigate } from "react-router-dom";

export default function Products({ title = "Product Title", img, id }) {
  const navigate = useNavigate();

  return (
    <Flex justifyContent="center" alignItems="center">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        paddingY={1}
        align={"center"}
        marginY={"1rem"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={img ? img : ShoppingCart}
          alt="Product"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
          </CardBody>

          <CardFooter>
            <Button
              onClick={() => navigate(`/Batches/${id}`)}
              variant="solid"
              colorScheme="red"
            >
              View all batches
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
}
