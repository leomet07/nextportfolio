import Head from "next/head";
import styles from "../styles/Projects.module.css";

const Projects = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lenny&apos;s Projects</title>
				<meta name="description" content="Lenny's projects" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Lenny&apos;s Projects</h1>
				<p>None have been displayed yet...</p>
				<p>
					Check Lenny&apos;{" "}
					<a href="https://github.com/leomet07">github</a> out though!
				</p>
			</main>
		</div>
	);
};

export default Projects;
