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
        <Box marginTop={"1%"}>
          <Heading>{productName}</Heading>
          <Stack divider={<StackDivider />} spacing="4">
            {/* repeat start*/}
            {batches.map((batch) => (
              <Card
                key={batch.name}
                textAlign={"center"}
                size={"lg"}
                variant="elevated"
              >
                <CardHeader>
                  <Heading size="md">{batch.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Progress
                    hasStripe
                    value={Math.ceil((batch.disposed / batch.total) * 100)}
                    size="md"
                    colorScheme="red"
                  />
                  <Text>
                    {Math.ceil((batch.disposed / batch.total) * 100)}% Disposed{" "}
                    <br /> ({batch.disposed} out of {batch.total})
                  </Text>
                </CardBody>
              </Card>
            ))}
            {/* repeat end*/}
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default ProductAnalyticsCard;
