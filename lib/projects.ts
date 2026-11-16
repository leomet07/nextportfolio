import fs from "fs";
import path from "path";
import { marked } from "marked";
import { Project } from "../types/project";

// Every project lives in this one file, in display order. Its top comment explains the format.
const PROJECTS_FILE = path.join(process.cwd(), "content", "projects.md");
const FIELDS = ["web_url", "gh_url", "images", "hidden"];

function getProjects(): Project[] {
	const sections = fs
		.readFileSync(PROJECTS_FILE, "utf8")
		.split(/^## /m)
		.slice(1); // drop everything before the first project heading

	return sections.flatMap((section) => {
		const [heading, ...lines] = section.split("\n");
		const name = heading.trim();

		// The "- key: value" lines right after the heading are fields; the rest is the description.
		const fields: Record<string, string> = {};
		let i = 0;
		for (; i < lines.length; i++) {
			const line = lines[i].trim();
			const field = /^- (\w+):\s*(.*)$/.exec(line);
			if (field && FIELDS.includes(field[1])) {
				fields[field[1]] = field[2].trim();
			} else if (field) {
				throw new Error(`content/projects.md, "${name}": unknown field "${field[1]}"`);
			} else if (line !== "") {
				break;
			}
		}
		const description = lines.slice(i).join("\n").trim();

		if (!fields.images || !description) {
			throw new Error(`content/projects.md, "${name}": needs an images field and a description`);
		}
		if (fields.hidden === "true") return [];

		const project: Project = {
			name,
			// The description sits inside a <p>, so render inline markdown only (no <p> wrapper).
			description: marked.parseInline(description, { async: false }),
			images: fields.images.split(",").map((image) => image.trim()),
		};
		// Only set the links that exist: getStaticProps props can't contain undefined.
		if (fields.web_url) project.web_url = fields.web_url;
		if (fields.gh_url) project.gh_url = fields.gh_url;
		return [project];
	});
}

export default getProjects;
