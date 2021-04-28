import React, { useState, useEffect } from "react";
import {
	Button,
	Stack,
	Center,
	Text,
	Box,
	Flex,
	Spacer,
} from "@chakra-ui/react";

type Drink = {
	id: number;
	name: string;
	ratios: [];
};

const CustomPage = (props: { setCurrentPage: (newPage: string) => void }) => {
	const [drinks, setDrinks] = useState([]);

	const sendDrinkCommand = (drink: number, size: string) => {
		const request_options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				type: "custom",
				drink,
				size,
			}),
		};
		fetch("http://10.0.0.160:3000", request_options).then((response) =>
			// console.log(response.json())
			console.log("test")
		);
	};

	useEffect(() => {
		const request_options = {
			method: "Get",
			headers: { "Content-Type": "application/json" },
		};
		fetch("http://10.0.0.160:3000/custom", request_options)
			.then((response) => response.json())
			.then((data) => {
				setDrinks(data.custom);
			});
	}, []);

	return (
		<Center width='100%'>
			{drinks.length === 0 ? (
				<Stack>
					<Text>loading</Text>
				</Stack>
			) : (
				<Stack spacing={8} width='80%' marginBottom='30px'>
					{drinks.map((drink: Drink) => (
						<Box
							padding='20px'
							paddingTop='10px'
							borderWidth='1px'
							borderRadius='30px'
							width='100%'
							key={drink.id}>
							<Text>{drink.name}</Text>
							<Flex>
								<Button
									className='drink-button'
									colorScheme='blue'
									size='lg'
									height='60px'
									width='40%'
									onClick={() => sendDrinkCommand(drink.id, "big")}>
									Pour Big
								</Button>
								<Spacer />
								<Button
									className='drink-button'
									colorScheme='blue'
									size='lg'
									height='60px'
									width='40%'
									onClick={() => sendDrinkCommand(drink.id, "small")}>
									Pour Small
								</Button>
							</Flex>
						</Box>
					))}
					<Button
						colorScheme='green'
						variant='outline'
						size='lg'
						onClick={() => props.setCurrentPage("basic")}>
						Basic Drinks{" "}
					</Button>
				</Stack>
			)}
		</Center>
	);
};

export default CustomPage;
