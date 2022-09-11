import RELEASE_JSON from "./sample_release.json";

export async function fetchLatestRelease(): Promise<typeof RELEASE_JSON> {
	return fetch("https://api.github.com/repos/makeark/ark/releases/latest")
		.then(res => res.json());
}