import { Box, SkeletonText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Products from "./Products";
import Manufacturer from "./Manufacturer";
import axios from "axios";

export default function ProductList() {
  const [loadedProduct, setLoadedProduct] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await axios.get(
        `https://trashtag.vercel.app/ecoperks/manufacturer/${localStorage.getItem(
          "userId"
        )}/api`
      );

      if (res.status == 200) {
        setLoadedProduct(res.data);
      } else {
        alert();
      }
    };
    loadProducts();
  }, []);
  return (
    <>
      <Manufacturer />
      {loadedProduct.length > 0 ? (
        loadedProduct.map((product) => {
          return (
            <Products id={product.id} title={product.name} key={product.id} />
          );
        })
      ) : (
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
