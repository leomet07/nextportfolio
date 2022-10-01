import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<div id="content_wrapper">
				<div id="page">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}

export default MyApp;
