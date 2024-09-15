import { Box, SkeletonText, useToast, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Products from "./Products";
import Manufacturer from "./Manufacturer";
import axios from "axios";
import { useIsSignedin } from "../hooks/useIsSignedIn";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
	const [loadedProduct, setLoadedProduct] = useState([]);
	const [loading, setLoading] = useState(false);
	const { signedIn } = useIsSignedin();
	const navigate = useNavigate();
	const toast = useToast();
	useEffect(() => {
		const loadProducts = async () => {
			setLoading(true);
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
		<>
			<Manufacturer />
			{loadedProduct.length > 0 ? (
				loadedProduct.map((product) => {
					return (
						<Products
							id={product.id}
							title={product.name}
							key={product.id}
						/>
					);
				})
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
				<Heading textAlign={"center"} margin={"2rem 1rem"}>
					Nothing to show here
				</Heading>
			)}
		</>
	);
}
