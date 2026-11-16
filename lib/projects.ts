import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Project } from "../types/project";

// One markdown file per project: YAML frontmatter for the fields, body for the description.
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function getProjects(): Project[] {
	return fs
		.readdirSync(PROJECTS_DIR)
		.filter((file) => file.endsWith(".md"))
		.map((file) => {
			const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
			const { data, content } = matter(raw);

			if (
				typeof data.name !== "string" ||
				typeof data.index !== "number" ||
				typeof data.public !== "boolean" ||
				!Array.isArray(data.images) ||
				data.images.length === 0
			) {
				throw new Error(
					`content/projects/${file}: frontmatter needs name, index, public and at least one image`
				);
			}

			return { file, data, content };
		})
		.filter(({ data }) => data.public)
		.map(({ file, data, content }) => {
			const { public: _public, ...fields } = data;
			return {
				...(fields as Omit<Project, "slug" | "description">),
				slug: file.replace(/\.md$/, ""),
				// The description sits inside a <p>, so render inline markdown only (no <p> wrapper).
				description: marked.parseInline(content.trim(), { async: false }),
			};
		})
		.sort((a, b) => a.index - b.index || a.slug.localeCompare(b.slug));
}

export default getProjects;
