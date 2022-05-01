import "./App.css";

import { Link } from "react-router-dom";

import { Navbar } from "./assets/components";
import { WindowsLogo } from "./assets/windowsLogo";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="page">
				<div className="home">
					<div className="home-left">
						<div className="home-heading">
							<div>ark.</div>
							<div className="home-heading-highlighted">
								mongodb
							</div>
							<div className="home-heading-highlighted">
								workspace
							</div>
						</div>
						<div className="home-sub-heading">
							<div>
								Scripting with MongoDB made easy and efficient.
							</div>
							<div>
								Ark is a workspace where the mongosh shell and
								the monaco editor are put together to provide a
								productive experience.
							</div>
						</div>
						<div className="home-buttons">
							<div className="button-primary">
								<div className="button-icon-left">
									<WindowsLogo />
								</div>
								<div className="button-text">download</div>
							</div>
						</div>
					</div>
					<div className="home-right">
						<div className="home-image"></div>
					</div>
				</div>
			</div>
			{/* <div className="footer">
				<div className="footer-columns">
					<div className="footer-column">
						<Link className="footer-link" to="/">
							Link 1
						</Link>
						<Link className="footer-link" to="/">
							Link 2
						</Link>
					</div>
					<div className="footer-column">
						<Link className="footer-link" to="/">
							Link 1
						</Link>
						<Link className="footer-link" to="/">
							Link 2
						</Link>
					</div>
				</div>
				<div className="footer-row">Copyright © 2022 WDD</div>
			</div> */}
		</div>
	);
}

export default App;
