import Head from "next/head";
import styles from "../styles/Projects.module.css";
import { GetStaticProps } from "next";
import { ReceivedProject } from "../types/db_types";
import DisplayedProject from "../components/DisplayedProject";
import dbConnect from "../lib/dbConnect";
import getProjects from "../helpers/get_projects_helper";

interface Props {
	projects: ReceivedProject[];
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
							key={String(project._id)}
							className={styles.project_bubble}
						>
							<DisplayedProject
								project={project}
							></DisplayedProject>
						</div>
					))}
				</section>
				<p>
					Check Lenny&apos;{" "}
					<a href="https://github.com/leomet07">GitHub</a> for his
					work though!
				</p>
			</main>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	await dbConnect();
	const db_projects = await getProjects();
	return {
		props: {
			projects: db_projects,
		},
	};
};

export default Projects;
