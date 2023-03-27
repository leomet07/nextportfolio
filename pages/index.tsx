import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MdLocationPin } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi";

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lenny Metlitsky</title>
				<meta name="description" content="Lenny Metlitsky" />
			</Head>

			<main className={styles.main}>
				<section id={styles.titles_container}>
					<h1 className={styles.title}>Hello, I&apos;m Lenny</h1>
					<p id={styles.pronouns}>(he/him/his)</p>
				</section>
				<section>
					<p>
						My name is Leonid, but everyone calls me Lenny! I&apos;m
						a 16 year old student at Stuyvesant High School. I
						currently do full-stack development, but I&apos;m very
						passionate about computer science and I have experience
						in various fields.
					</p>
					<p>
						During the last couple of years, I&apos;ve been working
						on many full-stack projects and learning about the web
						development field as a whole. I&apos;ve used many JS
						frameworks (React, Vue, Svelte, Angular, etc), but my
						favorite one is NEXTjs. I&apos;m using NEXTjs for my
						this site and most of my current projects.
					</p>
					<p>
						Currently, much of my work is for the various aspects of
						my Stuyvesant life. I&apos;ve done web development for
						my school&apos;s newspaper (
						<a href="https://stuyspec.com">
							The Stuyvesant Spectator
						</a>
						), my school&apos;s{" "}
						<a href="https://stuysu.org">student union</a> and the{" "}
						<a href="https://sophomore.stuysu.org">
							freshman/sophomore caucus
						</a>
						, my school computer science classes, and clubs!
						I&apos;m the co-president and co-founder of{" "}
						<a href="https://stuylinux.org">Stuy Linux</a>, my
						school&apos;s first club about free software and Linux.
					</p>
					<p>
						However, I still have many side projects, such as my
						personal blog or this personal portfolio site. I have
						many projects, and they range from mobile apps to
						computer vision and analytics systems.
					</p>
					<p>
						I participate in many hackathons, and my{" "}
						<a href="https://github.com/leomet07">GitHub</a> and{" "}
						<a href="https://devpost.com/leomet07">Devpost</a> have
						many entries (with many victories too!)
					</p>
					<p>
						Outside of my passion for web development and my
						experience, I have been learning about operating
						systems, Linux, and the free software that makes it all
						possible.
					</p>
				</section>
				<section id={styles.other_info_container}>
					<a href="/resume.pdf" className={styles.line_container}>
						<HiOutlineNewspaper className={styles.line_icon} />
						My resume
					</a>
					<div className={styles.line_container}>
						<MdLocationPin className={styles.line_icon} /> New York
						City
					</div>
					<a
						href="https://www.buymeacoffee.com/leomet07"
						className={styles.line_container}
					>
						<SiBuymeacoffee className={styles.line_icon} />
						Buy Me A Coffee
					</a>
				</section>
			</main>
		</div>
	);
};

export default Home;
