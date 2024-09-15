import { useEffect, useState } from "react";
import Batch from "./Batch";
import BatchHeader from "./BatchHeader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Heading, Text, SkeletonText, useToast } from "@chakra-ui/react";
import { useIsSignedin } from "../hooks/useIsSignedIn";

export default function Batches() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const { signedIn } = useIsSignedin();
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://trashtag.vercel.app/ecoperks/manufacturer/${localStorage.getItem(
          "userId"
        )}/products/${productId}/batches/api`
      );

      if (res.status == 200) {
        setData(res.data);
      } else {
        alert("Error fetching data");
      }
      setLoading(false);
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
    <div>
      <BatchHeader />
      {data.length > 0 ? (
        data.map((el) => <Batch title={el.id} key={el.id} size={el.size} />)
      ) : loading ? (
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
      ) : (
        <Heading>
          <Text textAlign={"center"}>Nothing to show here</Text>
        </Heading>
      )}
    </div>
  );
}
