import React from "react";
import logo from "./logo.svg";
import {} from "@chakra-ui/react";
import {
	Button,
	Stack,
	ChakraProvider,
	Flex,
	Center,
	Spacer,
	Text,
	Box,
} from "@chakra-ui/react";

import "./App.css";

const App = () => {
	const send_motor_command = (motor_num: number, action: string) => {
		console.log("sending " + action + " for motor " + String(motor_num));
		const request_options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				type: "motor",
				motor: motor_num,
				action: action,
			}),
		};

		fetch("http://10.0.0.160:3000", request_options).then((response) =>
			// console.log(response.json())
			console.log("test")
		);
	};

	const motors = [0, 1, 2, 3, 4, 5];

	return (
		<div className='App'>
			<header className='App-header'>
				<ChakraProvider>
					<Stack spacing={8} width='80%'>
						{motors.map((number) => (
							<Box
								padding='20px'
								paddingTop='10px'
								maxW='sm'
								borderWidth='1px'
								borderRadius='30px'>
								<Text>Drink {number + 1}</Text>
								<Flex>
									<Button
										className='drink-button'
										colorScheme='blue'
										size='lg'
										height='60px'
										width='40%'
										onClick={() => send_motor_command(number, "on")}>
										Start
									</Button>
									<Spacer />
									<Button
										className='drink-button'
										colorScheme='blue'
										size='lg'
										height='60px'
										width='40%'
										onClick={() => send_motor_command(number, "off")}>
										Stop
									</Button>
								</Flex>
							</Box>
						))}
					</Stack>
				</ChakraProvider>
			</header>
		</div>
	);
};

export default App;
