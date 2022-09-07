import "./download.css";

import React, { useEffect, useState } from "react";
import { fetchLatestRelease } from "./releases";
import { Button } from "../../components";
import { Select } from "../../components/select";

interface ReleaseAsset {
	name: string;
	downloadUrl: string;
	downloadCount: number;
}

interface Release {
	url: string;
	assets: ReleaseAsset[];
}

export function Download() {
	const [latest, setLatest] = useState<Release>();
	const [os, setOS] = useState<string>();
	const [version, setVersion] = useState<string>();

	useEffect(() => {
		fetchLatestRelease().then(release => {
			setLatest({
				url: release.html_url,
				assets: release.assets.map(asset => ({
					name: asset.name,
					downloadUrl: asset.browser_download_url,
					downloadCount: asset.download_count,
				})),
			});
		});
	}, []);

	return (
		<div className="download">
			<div className="download-beta-banner">
				We're actively working on supporting all platforms. Check again soon to see if your system is supported.
			</div>
			<div className="download-container">
				<div className="download-left">
					<div className="download-title">Get Started Now!</div>
					<div className="download-text">
						Ark is completely free to download without the need to provide personal information or accept
						shady privacy policies!
					</div>
				</div>
				<div className="download-right">
					<Select
						label="Operating System"
						onSelect={() => {}}
						options={[
							{
								label: "Linux",
								value: "linux",
							},
						]}
						value={os || ""}
					/>

					<Select
						label="Version"
						onSelect={() => {}}
						options={[
							{
								label: "Latest",
								value: "latest",
							},
						]}
						value={version || ""}
					/>

					<Button text="Download Beta" onClick={() => {}} />
				</div>
			</div>
		</div>
	);
}
