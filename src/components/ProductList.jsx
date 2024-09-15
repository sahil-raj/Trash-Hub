import { Box, Container, SkeletonText, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Products from "./Products";
import Manufacturer from "./Manufacturer";
import axios from "axios";
import { useIsSignedin } from "../hooks/useIsSignedIn";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [loadedProduct, setLoadedProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { signedIn } = useIsSignedin();
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    const loadProducts = async () => {
      const res = await axios.get(
        `https://trashtag.vercel.app/ecoperks/manufacturer/${localStorage.getItem(
          "userId"
        )}/api`
      );
      // console.log(res.data)
      if (res.status == 200) {
        setLoadedProduct(res.data);
      } else {
        alert();
      }
      setLoading(false)
    };
    if (signedIn) {
      loadProducts();
    } else {
      toast({
        title: "Please sign in first",
        position: "top-right",
      });
      navigate("/signin");
    }
  }, []);
  return (
    <>
      <Manufacturer />
      {!loading ? (
        <Container overflowX={"hidden"} maxW={"7xl"}>
          {loadedProduct.map((product) => {
            return (
              <Products
                id={product.id}
                title={product.name}
                key={product.id}
              />
            );
          })}
        </Container>
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
