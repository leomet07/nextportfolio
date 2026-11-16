import Head from "next/head";
import { SITE_NAME, SITE_URL } from "../lib/site";

interface Props {
	title: string; // keep under ~60 characters, or search results cut it off
	description: string; // keep under ~160 characters, for the same reason
	path: string; // the page's own path, like "/projects"
	jsonLd?: object; // schema.org structured data describing the page
}

// The <head> tags that search engines and link previews (LinkedIn, Slack, iMessage...) read.
function Seo({ title, description, path, jsonLd }: Props) {
	const url = SITE_URL + path;
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={`${SITE_URL}/og.png`} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content={SITE_NAME} />
			<meta name="twitter:card" content="summary_large_image" />
			{jsonLd && (
				<script
					type="application/ld+json"
					// Escape "<" so text from outside (like paper titles from ORCID) can't close the tag.
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
					}}
				/>
			)}
		</Head>
	);
}

export default Seo;
