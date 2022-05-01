import "./App.css";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Logo } from "./assets/logo";

function App() {
	const navbarLinks = [
		{
			title: "home",
		},
		{
			title: "docs",
		},
		{
			title: "github",
		},
	];

	const location = useLocation();
	const [navActive, setNavActive] = useState("");

	useEffect(() => {
		setNavActive(location.pathname.split("/")[1]);
	});

	return (
		<div className="App">
			<div className="navbar">
				<div className="navbar-left">
					<Link className="navbar-logo" to="/">
						<Logo />
					</Link>
				</div>
				<div className="navbar-right">
					<div className="navbar-links">
						{navbarLinks.map((item, index) => {
							return (
								<div
									key={index}
									className={`navbar-link ${
										navActive === item.title ? "active" : ""
									} `}
								>
									<Link
										onClick={() => setNavActive(item.title)}
										to={item.title}
									>
										{item.title}
									</Link>
								</div>
							);
						})}
						<div className="navbar-link">
							<Link className="button-link" to="/download">
								download
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="page">Page</div>
			<div className="footer">
				<div className="footer-columns">
					<div className="footer-column">
						<Link className="footer-link" to="/">
							Link 1
						</Link>
						<Link className="footer-link" to="/">
							Link 2
						</Link>
					</div>
					<div className="footer-column">
						<Link className="footer-link" to="/">
							Link 1
						</Link>
						<Link className="footer-link" to="/">
							Link 2
						</Link>
					</div>
				</div>
				<div className="footer-row">Copyright © 2022 WDD</div>
			</div>
		</div>
	);
}

export default App;
