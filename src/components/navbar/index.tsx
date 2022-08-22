import "./navbar.css";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import { Logo } from "../../logo";
import { ReactComponent as Logo } from "../../assets/logo_outline.svg";

export const Navbar = () => {
	const navbarLinks = [
		{
			title: "GitHub",
			href: "https://www.github.com/makeark/ark"
		},
		{
			title: "Wiki",
			href: "https://makeark.notion.site"
		},
	];

	const [navActive, setNavActive] = useState("");

	return (
		<div className="navbar">
			<div className="navbar-left">
				<Link className="navbar-logo" to="/">
					<Logo style={{ width: "3rem", height: "3rem" }} />
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
								<a href={item.href} target="_blank">{item.title}</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
