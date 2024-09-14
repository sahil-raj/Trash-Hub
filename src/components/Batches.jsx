import { useEffect, useState } from "react";
import Batch from "./Batch";
import BatchHeader from "./BatchHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Heading, Text } from "@chakra-ui/react";

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
        alert();
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
        <Heading textAlign="center">
          <Text>Nothing to show here</Text>
        </Heading>
      )}
    </div>
  );
}
