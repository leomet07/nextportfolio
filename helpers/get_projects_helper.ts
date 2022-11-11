import Project from "../models/Project";
import { ReceivedProject } from "../types/db_types";

async function getProjects() {
	let db_projects = JSON.parse(
		JSON.stringify(
			await Project.find({
				public: true,
			})
		)
	) as ReceivedProject[];

	db_projects = db_projects.sort((a, b) => a.index - b.index);

	return db_projects;
}

export default getProjects;
