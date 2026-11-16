import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { SiGithub, SiOrcid } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PROFILE_URLS } from "../lib/site";

function Navbar() {
	return (
		<div id={styles.navbar_container}>
			<nav id={styles.navbar}>
				<div className={styles.link_container}>
					<Link href="/">home</Link>
				</div>
				<div className={styles.link_container}>
					<Link href="/projects">projects</Link>
				</div>
				<div className={styles.link_container}>
					<Link href="/publications">publications</Link>
				</div>
			</nav>
			<div id={styles.socials}>
				<div id={styles.linkedin_link}>
					<a
						aria-label="LinkedIn"
						href={PROFILE_URLS.linkedin}
					>
						<FaLinkedin />
					</a>
				</div>
				<div id={styles.orcid_link}>
					<a
						aria-label="Orcid"
						href={PROFILE_URLS.orcid}
					>
						<SiOrcid />
					</a>
				</div>
				<div id={styles.github_link}>
					<a aria-label="Github" href={PROFILE_URLS.github}>
						<SiGithub />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
