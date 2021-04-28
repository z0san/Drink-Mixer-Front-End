import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import BasicPage from "./pages/BasicPage";
import CustomPage from "./pages/CustomPage";

import "./App.css";

const App = () => {
	const [currentPage, setCurrentPage] = useState("basic");

	return (
		<div className='App'>
			<header className='App-header'>
				<ChakraProvider>
					{currentPage === "basic" ? (
						<BasicPage setCurrentPage={setCurrentPage} />
					) : (
						<CustomPage setCurrentPage={setCurrentPage} />
					)}
				</ChakraProvider>
			</header>
		</div>
	);
};

export default App;
