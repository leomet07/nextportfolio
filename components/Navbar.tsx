import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { SiGithub, SiOrcid, SiLinkedin } from "react-icons/si";

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
			</nav>
			<div id={styles.socials}>
				<div id={styles.linkedin_link}>
					<a
						aria-label="LinkedIn"
						href="https://www.linkedin.com/in/leonid-metlitsky/"
					>
						<SiLinkedin />
					</a>
				</div>
				<div id={styles.orcid_link}>
					<a
						aria-label="Orcid"
						href="https://orcid.org/0009-0008-6423-6334"
					>
						<SiOrcid />
					</a>
				</div>
				<div id={styles.github_link}>
					<a aria-label="Github" href="https://github.com/leomet07">
						<SiGithub />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
