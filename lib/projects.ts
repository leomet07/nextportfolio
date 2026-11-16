import fs from "fs";
import path from "path";
import { marked } from "marked";
import { Project } from "../types/project";

// Every project lives in this one file, in display order. Its top comment explains the format.
const PROJECTS_FILE = path.join(process.cwd(), "content", "projects.md");
const FIELDS = ["web_url", "gh_url", "images", "hidden"];

// An extended WebP ("VP8X" chunk) with the animation flag set.
function isAnimatedWebp(file: string): boolean {
	const header = fs.readFileSync(file).subarray(0, 21);
	return header.toString("ascii", 8, 16) === "WEBPVP8X" && (header[20] & 0x02) !== 0;
}

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

		// Hidden projects can be unfinished drafts, so only visible ones are checked.
		if (fields.hidden === "true") return [];

		const fail = (problem: string) => {
			throw new Error(`content/projects.md, "${name}": ${problem}`);
		};
		if (!fields.images || !description) fail("needs an images field and a description");
		const images = fields.images.split(",").map((image) => image.trim());
		for (const image of images) {
			if (!fs.existsSync(path.join(process.cwd(), "public", image))) fail(`image not found: public${image}`);
		}
		for (const url of [fields.web_url, fields.gh_url]) {
			if (url && !/^https?:\/\//.test(url)) fail(`link must start with http(s)://: ${url}`);
		}

		const project: Project = {
			name,
			// The description sits inside a <p>, so render inline markdown only (no <p> wrapper).
			description: marked.parseInline(description, { async: false }),
			images,
		};
		// Only set the links that exist: getStaticProps props can't contain undefined.
		if (fields.web_url) project.web_url = fields.web_url;
		if (fields.gh_url) project.gh_url = fields.gh_url;
		// Next can't resize animations, so the card loads an animated cover directly.
		if (isAnimatedWebp(path.join(process.cwd(), "public", images[0]))) project.animated = true;
		return [project];
	});
}

export default getProjects;
