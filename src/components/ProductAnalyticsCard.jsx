import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Stack,
  Text,
  Box,
  Heading,
  Progress,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ProductAnalyticsCard = ({
  productName = "Product Name",
  batches = [],
}) => {
  return (
    <>
      <Stack divider={<StackDivider />}>
        <Box marginY={"1rem"}>
          <Heading>
            <Text marginY={"1rem"} align={"center"}>
              {productName}
            </Text>
          </Heading>
          <Stack spacing="4">
            {batches.map((batch) => (
              <Card
                key={batch.name}
                textAlign={"center"}
                size={"lg"}
                variant="elevated"
                width={"40%"}
                marginLeft={"30%"}
              >
                <Stack
                  divider={<StackDivider width={"80%"} alignSelf={"center"} />}
                >
                  <CardHeader>
                    <Heading size="md">Batch ID: {batch.name}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Progress
                      hasStripe
                      value={Math.ceil((batch.disposed / batch.total) * 100)}
                      size="md"
                      colorScheme="red"
                    />
                    <Text>
                      {Math.ceil((batch.disposed / batch.total) * 100)}%
                      Disposed <br /> ({batch.disposed} out of {batch.total})
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default ProductAnalyticsCard;
