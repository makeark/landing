import "./navbar.css";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Logo } from "../../logo";

export const Navbar = () => {
	const navbarLinks = [
		{
			title: "home",
		},
		{
			title: "github",
		},
		{
			title: "docs",
		},
	];

	const location = useLocation();
	const [navActive, setNavActive] = useState("");

	useEffect(() => {
		setNavActive(location.pathname.split("/")[1]);
	});

	return (
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
					{/* <div className="navbar-link">
						<Link className="button-link-primary" to="/download">
							download
						</Link>
					</div> */}
				</div>
			</div>
		</div>
	);
};
