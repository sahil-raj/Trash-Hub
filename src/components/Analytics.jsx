import { SkeletonText, Heading, Text, Box, useToast } from "@chakra-ui/react";
import ProductAnalyticsCard from "./ProductAnalyticsCard";
import { useIsSignedin } from "../hooks/useIsSignedIn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Analytics() {
	const [analyticsData, setAnalyticsData] = useState([]);
	const [loading, setLoading] = useState(false);
	const { signedIn } = useIsSignedin();
	const navigate = useNavigate();
	const toast = useToast();

	useEffect(() => {
		const myFunc = async () => {
			setLoading(true);
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
			setLoading(false);
		};
		if (signedIn) {
			myFunc();
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

			{loading && analyticsData.length == 0 ? (
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
				analyticsData.length === 0 && (
					<Heading textAlign={"center"} margin={"2rem 1rem"}>
						Nothing to show here
					</Heading>
				)
			)}
		</>
	);
}
