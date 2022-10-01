import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lenny Metlitsky</title>
				<meta name="description" content="Lenny " />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Hey, I&apos;m Lenny</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Purus in mollis nunc sed id.
				</p>
				<p>
					Lectus nulla at volutpat diam ut venenatis. Sit amet
					consectetur adipiscing elit. Sit amet porttitor eget dolor
					morbi non. Neque convallis a cras semper auctor. Leo integer
					malesuada nunc vel risus commodo.
				</p>
			</main>
		</div>
	);
};

export default Home;
