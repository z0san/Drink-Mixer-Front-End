import { Button, Stack, Flex, Spacer, Text, Box } from "@chakra-ui/react";

const BasicPage = (props: { setCurrentPage: (newPage: string) => void }) => {
	const sendMotorCommand = (motor_num: number) => {
		console.log("sending for motor " + String(motor_num));
		const request_options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				type: "motor",
				motor: motor_num,
				time: 30000,
			}),
		};
		fetch("http://10.0.0.160:3000", request_options).then((response) =>
			// console.log(response.json())
			console.log("test")
		);
	};

	const motors = [0, 1, 2, 3, 4, 5];

	return (
		<Stack spacing={8} width='80%' marginBottom='30px'>
			{motors.map((number) => (
				<Box
					padding='20px'
					paddingTop='10px'
					maxW='sm'
					borderWidth='1px'
					borderRadius='30px'
					key={number}>
					<Text>Drink {number + 1}</Text>
					<Button
						className='drink-button'
						colorScheme='blue'
						size='lg'
						height='60px'
						width='40%'
						onClick={() => sendMotorCommand(number)}>
						Pour 30sec
					</Button>
				</Box>
			))}
			<Button
				colorScheme='green'
				variant='outline'
				size='lg'
				onClick={() => props.setCurrentPage("custom")}>
				Custom Drinks{" "}
			</Button>
		</Stack>
	);
};

export default BasicPage;
