import "./download.css";

import React, { useCallback, useEffect, useState } from "react";
import { fetchLatestRelease } from "./releases";
import { Button } from "../../components";
import { Select } from "../../components/select";

const formatAssetName = (str: string) => {
	try {
		const segments = str.split("-");
		const last = segments[segments.length - 1];
		const [arch,ext] = last.split(".");
		const [, OS, version] = segments;
		return `${OS}-${arch} / ${version} (${ext})`;
	} catch (err) {
		console.log("format asset failure:", str);
		console.log(err);
		return str;
	}
};

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

	const downloadLatest = useCallback(() => {
		
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
						label="OS & Arch"
						onSelect={(value) => {
							console.log("os", value);
						}}
						options={latest?.assets.map(asset => ({
							label: formatAssetName(asset.name),
							value: asset.downloadUrl
						})) || []}
						
					/>

					<Button text="Download Beta" onClick={downloadLatest} />

					<span>Looking for older versions? Look <a href="https://github.com/makeark/ark/releases" target={"_blank"}>here</a>.</span>
				</div>
			</div>
		</div>
	);
}
