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
			Scripting with MongoDB made free, simple, and organized.
		</div>
		<div className="home-buttons">
			<Link to={"download"}>
				<Button text="Download" />
			</Link>
		</div>
		<div className="home-image">
			<img src={ARK_PREVIEW_IMAGE} />
		</div>
		<div className="home-section-feature">
			<div className="home-section-feature-content">
				<div className="home-section-feature-title">
					{"Monaco Editor & Intellisense"}
				</div>
				<div className="home-section-feature-desc">
					Powered by the same editor that runs in VS Code. Ark supports Intellisense for shell API and complete ES6+ support with type checking.
				</div>
			</div>
			<div className="home-section-feature-image"></div>
		</div>
		<div className="home-section-feature">
			<div className="home-section-feature-image"></div>
			<div className="home-section-feature-content">
				<div className="home-section-feature-title">
					Inline Editing
				</div>
				<div className="home-section-feature-desc">
					Make edits to documents directly from the result without having to write long update queries.
				</div>
			</div>
		</div>
		<div className="home-section-feature">
			<div className="home-section-feature-content">
				<div className="home-section-feature-title">
					<code>mongosh</code> Support
				</div>
				<div className="home-section-feature-desc">
					Write all kinds of scripts with complete mongosh support.
				</div>
			</div>
			<div className="home-section-feature-image"></div>
		</div>
		<div className="home-section-wiki">
			Read more about all the features we have to offer here.
		</div>
	</div>
}