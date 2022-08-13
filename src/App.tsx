import "./App.css";

import React from "react";

import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import { Navbar } from "./components";
import { Home } from "./pages/home";
import { Download } from "./pages/download";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="page">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/download" element={<Download />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
