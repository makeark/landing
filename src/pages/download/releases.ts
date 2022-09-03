import RELEASE_JSON from "./sample_release.json";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchLatestRelease(): Promise<typeof RELEASE_JSON> {
	await sleep(100000);
	return fetch("https://api.github.com/repos/makeark/ark/releases/latest")
		.then(res => res.json());
}