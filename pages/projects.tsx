import styles from "../styles/Projects.module.css";
import { GetStaticProps } from "next";
import { Project } from "../types/project";
import DisplayedProject from "../components/DisplayedProject";
import getProjects from "../lib/projects";
import Seo from "../components/Seo";

interface Props {
	projects: Project[];
}
const Projects = (props: Props) => {
	return (
		<div className={styles.container}>
			<Seo
				title="Projects | Lenny Metlitsky"
				description="Projects by Lenny Metlitsky: cool corridor routing engine, satellite temperature downscaling, NYC subway heat models, algal bloom predictions, and a custom-made lake buoy."
				path="/projects"
			/>

			<main className={styles.main}>
				<h1 className={styles.title}>Lenny&apos;s Projects</h1>
				<section id={styles.projects_display}>
					{props.projects.map((project, i) => (
						<div
							key={project.name}
							className={styles.project_bubble}
						>
							<DisplayedProject
								project={project}
								isFirst={i === 0}
							></DisplayedProject>
						</div>
					))}
				</section>
				<p id={styles.more_work}>
					Check out my{" "}
					<a href="https://github.com/leomet07">GitHub</a> for more
					work!
				</p>
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
