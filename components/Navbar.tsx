import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { SiGithub } from "react-icons/si";

function Navbar() {
	return (
		<div id={styles.navbar_container}>
			<nav id={styles.navbar}>
				<div className={styles.link_container}>
					<Link href="/">/</Link>
				</div>
				<div
					className={
						styles.link_container + " " + styles.additional_link
					}
				>
					<Link href="/projects">/projects</Link>
				</div>
				<div
					className={
						styles.link_container + " " + styles.additional_link
					}
				>
					<Link href="/jobs">/jobs</Link>
				</div>
				<div
					className={
						styles.link_container + " " + styles.additional_link
					}
				>
					<Link href="/donate">/donate</Link>
				</div>
			</nav>
			<div id={styles.socials}>
				<a href="https://github.com/leomet07">
					<SiGithub />
				</a>
			</div>
		</div>
	);
}

export default Navbar;
