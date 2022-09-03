import "./home.css";
import React from "react";
import { Button } from "../../components";

import ARK_PREVIEW_IMAGE from "../../assets/home_preview.png";
import EMBEDDED_MONGOSH from "../../assets/embedded_mongosh.png"
import INLINE_EDIT_DATEPICKER from "../../assets/inline_editor.png";
import { Link } from "react-router-dom";

export function Home() {
	return <div className="home">

		<div className="home-heading">
			<div>ark.</div>
			<div className="home-heading-highlighted">a mongodb workspace</div>
		</div>
		<div className="home-sub-heading">
			Scripting with MongoDB decluttered.
		</div>
		<div className="home-buttons">
			<Link to={"download"}>
				<Button shadow text="Download Beta" />
			</Link>
		</div>


		<div className="home-image primary-drop-shadow">
			<img src={ARK_PREVIEW_IMAGE} />
		</div>


		<div className="home-section-feature">
			<div className="home-section-feature-content">
				<div className="home-section-feature-title">
					Embedded <code>mongosh</code>
				</div>
				<div className="home-section-feature-desc">
					Supports <a href="https://www.mongodb.com/docs/mongodb-shell/reference/methods/" target={"_blank"}>mongosh</a> shell functions in the <a href="https://microsoft.github.io/monaco-editor/">Monaco</a> text editor to provide a shell experience that makes you feel right at home.
				</div>
			</div>
			<div className="home-section-feature-image secondary-drop-shadow">
				<img className="inline-editor" src={EMBEDDED_MONGOSH} />
			</div>
		</div>


		<div className="home-section-feature">
			<div className="home-section-feature-image secondary-drop-shadow">
				<img className="inline-editor" src={INLINE_EDIT_DATEPICKER} />
			</div>
			<div className="home-section-feature-content">
				<div className="home-section-feature-title">
					Inline Editing
				</div>
				<div className="home-section-feature-desc">
					Make edits to documents directly from the result without having to write long update queries.
				</div>
			</div>
		</div>


		<div className="home-section-wiki">
			Take a look at our roadmap over <a href="#">here</a>.
		</div>

	</div>
}