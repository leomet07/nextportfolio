import Head from "next/head";
import styles from "../styles/Projects.module.css";
import { GetStaticProps } from "next";
import getServerUrl from "../lib/getServerUrl";
import { ReceivedProject } from "../types/db_types";

interface Props {
	projects: ReceivedProject[];
}
const Projects = (props: Props) => {
	console.log(props.projects);
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
						<div key={String(project._id)}>
							<h2>{project.name}</h2>
							<p
								dangerouslySetInnerHTML={{
									__html: project.description,
								}}
							></p>
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

type getProjectsResponse = {
	success: boolean;
	projects: ReceivedProject[];
};

export const getStaticProps: GetStaticProps = async (context) => {
	const request: any = await fetch(getServerUrl() + "/api/get_projects");
	const r_json: getProjectsResponse = await request.json();

	return {
		props: {
			projects: r_json.projects,
		},
	};
};

export default Projects;
