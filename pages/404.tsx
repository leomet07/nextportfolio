import Head from "next/head";
import Link from "next/link";
import styles from "../styles/404.module.css";

const fourzerofour = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>404 - Page not found</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>404! Page not found...</h1>
				<Link href="/">
					<a id={styles.go_home_link}>Go back home...</a>
				</Link>
			</main>
		</div>
	);
};

export default fourzerofour;
