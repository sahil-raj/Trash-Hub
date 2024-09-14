import { SkeletonText, Heading, Text, Box } from "@chakra-ui/react";
import ProductAnalyticsCard from "./ProductAnalyticsCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Analytics() {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const myFunc = async () => {
      let res = await axios.get(
        `https://trashtag.vercel.app/ecoperks/manufacturer/${localStorage.getItem(
          "userId"
        )}/analytics/api`
      );

      if (res.status == 200) {
        setAnalyticsData(res.data);
      } else {
        alert("error fetching data");
      }
    };
    myFunc();
  }, []);

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
      {analyticsData.length > 0 &&
        analyticsData.map((product) => {
          return (
            <ProductAnalyticsCard
              key={product.product_id}
              productName={product.product}
              batches={product.data.map((el) => {
                return {
                  name: el.batch_id,
                  disposed: el.disposed,
                  total: el.batch_size,
                };
              })}
            />
          );
        })}
      {analyticsData.length == 0 && (
        <Box
          mt="4rem"
          ml="25%"
          width="50%"
          padding="6"
          boxShadow="lg"
          bg="white"
        >
          <SkeletonText
            my="1rem"
            noOfLines={5}
            spacing="4"
            skeletonHeight="2"
          />
        </Box>
      )}
    </>
  );
}
