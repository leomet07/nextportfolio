export interface Project {
	slug: string; // file name in content/projects, without .md
	name: string;
	description: string; // HTML, rendered from the markdown body at build time
	images: string[];
	gh_url?: string;
	web_url?: string;
	index: number;
}
