import "./App.css";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { Home } from "./pages/home";
import { Download } from "./pages/download";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/download" element={<Download />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
