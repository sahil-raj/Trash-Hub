import { useEffect, useState } from "react";
import Batch from "./Batch";
import BatchHeader from "./BatchHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, SkeletonText } from "@chakra-ui/react";

export default function Batches() {
  const [data, setData] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    const loadProducts = async () => {
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
    };
    loadProducts();
  }, []);
  return (
    <div>
      <BatchHeader />
      {data.length > 0 ? (
        data.map((el) => <Batch title={el.id} key={el.id} size={el.size} />)
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
    </div>
  );
}
