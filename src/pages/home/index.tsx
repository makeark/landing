import "./home.css";
import React from "react";
import { Button } from "../../components";

import ARK_PREVIEW_IMAGE from "../../assets/images/home_preview.png";
import EMBEDDED_MONGOSH_VID from "../../assets/videos/ark-editor.mp4";
import INLINE_EDIT_VID from "../../assets/videos/ark-inline-edit.mp4";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<div className="home">
			<div className="home-heading">
				<div>ark.</div>
				<div className="home-heading-highlighted">a mongodb workspace</div>
			</div>
			<div className="home-sub-heading">Scripting with MongoDB decluttered.</div>
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
						Supports{" "}
						<a href="https://www.mongodb.com/docs/mongodb-shell/reference/methods/" target={"_blank"}>
							mongosh
						</a>{" "}
						shell functions in the <a href="https://microsoft.github.io/monaco-editor/">Monaco</a> text
						editor to provide a shell experience that makes you feel right at home.
					</div>
				</div>
				<video className="home-video secondary-drop-shadow" autoPlay loop playsInline muted>
					<source src={EMBEDDED_MONGOSH_VID} type="video/mp4" />
				</video>
			</div>

			<div className="home-section-feature row-reverse">
				<div className="home-section-feature-content">
					<div className="home-section-feature-title">Inline Editing</div>
					<div className="home-section-feature-desc">
						Make edits to documents directly from the result without having to write long update queries.
					</div>
				</div>
				<video className="home-video secondary-drop-shadow" autoPlay loop playsInline muted>
					<source src={INLINE_EDIT_VID} type="video/mp4" />
				</video>
			</div>

			<div className="home-section-wiki">
				Take a look at our roadmap over <a href="https://github.com/orgs/makeark/projects/1/views/2" target={"_blank"}>here</a>.
			</div>
		</div>
	);
}
