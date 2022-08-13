import "./home.css";
import React from "react";
import { Button } from "../../components";

import ARK_PREVIEW_IMAGE from "../../assets/home_preview.png";
import { Link } from "react-router-dom";

export function Home() {
	return <div className="home">
		<div className="home-heading">
			<div>ark.</div>
			<div className="home-heading-highlighted">a mongodb workspace</div>
		</div>
		<div className="home-sub-heading">
			Scripting with MongoDB made simple and organized.
		</div>
		<div className="home-buttons">
			<Link to={"download"}>
				<Button text="Get Started" />
			</Link>
		</div>
		<div className="home-image">
			<img src={ARK_PREVIEW_IMAGE} />
		</div>
	</div>
}