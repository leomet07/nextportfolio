import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<div id="content_wrapper">
				<div id="navbar_container">
					<Navbar />
				</div>
				<div id="page_container">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}

export default MyApp;
