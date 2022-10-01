import Link from "next/link";
import styles from "../styles/Navbar.module.css";
function Navbar() {
	return (
		<div id={styles.navbar_container}>
			<nav id={styles.navbar}>
				<div className={styles.link_container}>
					<Link href="/">/</Link>
				</div>
				<div className={styles.link_container}>
					<Link href="/projects">/projects</Link>
				</div>
				<div className={styles.link_container}>
					<Link href="/jobs">/jobs</Link>
				</div>
				<div className={styles.link_container}>
					<Link href="/donate">/donate</Link>
				</div>
			</nav>
			<div id={styles.socials}>GH</div>
		</div>
	);
}

export default Navbar;
