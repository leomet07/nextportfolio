export interface Project {
	name: string;
	description: string; // HTML, rendered from the markdown description at build time
	images: string[];
	gh_url?: string;
	web_url?: string;
}
