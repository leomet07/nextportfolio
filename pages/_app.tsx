import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div id="content_wrapper">
				<div id="navbar_container">
					<Navbar />
				</div>
				<div id="page_container">
					<Component {...pageProps} />
				</div>
				<Script
					async
					defer
					data-website-id="c100c974-039d-4bc2-978e-c3d0a224a766"
					src="https://umami-fork-alpha.vercel.app/umami.js"
				></Script>
			</div>
		</>
	);
}

export default MyApp;
