import Head from "next/head";
import styles from "../styles/Projects.module.css";
import { GetStaticProps } from "next";
import { Project } from "../types/project";
import DisplayedProject from "../components/DisplayedProject";
import getProjects from "../lib/projects";

interface Props {
	projects: Project[];
}
const Projects = (props: Props) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lenny&apos;s Projects</title>
				<meta name="description" content="Lenny's projects" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Lenny&apos;s Projects</h1>
				<section id={styles.projects_display}>
					{props.projects.map((project) => (
						<div
							key={project.name}
							className={styles.project_bubble}
						>
							<DisplayedProject
								project={project}
							></DisplayedProject>
						</div>
					))}
				</section>
				<h2 id={styles.more_work}>
					Check out my{" "}
					<a href="https://github.com/leomet07">GitHub</a> for more
					work!
				</h2>
			</main>
		</div>
	);
};

// Runs at build time only: the markdown files are read and rendered to HTML here,
// so neither the files nor the markdown libraries reach the browser.
export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			projects: getProjects(),
		},
	};
};

export default Projects;
