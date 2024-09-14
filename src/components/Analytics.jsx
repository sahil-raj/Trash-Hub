import { Text, Heading } from "@chakra-ui/react";
import ProductAnalyticsCard from "./ProductAnalyticsCard";

export default function Analytics() {
  return (
    <>
      <Heading
        marginTop={"2%"}
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        textAlign={"center"}
      >
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "red.400",
            zIndex: -1,
          }}
        >
          Disposal Analytics
        </Text>
      </Heading>
      <ProductAnalyticsCard
        productName="P1"
        batches={[
          { name: "test", total: 100, disposed: 77 },
          { name: "test2", total: 100, disposed: 69 },
          { name: "test2", total: 100, disposed: 6 },
          { name: "test2", total: 100, disposed: 0 },
        ]}
      />

      <ProductAnalyticsCard
        productName="P2"
        batches={[
          { name: "test", total: 100, disposed: 77 },
          { name: "test2", total: 100, disposed: 69 },
        ]}
      />
    </>
  );
}
