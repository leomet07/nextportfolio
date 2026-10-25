import Head from "next/head";
import styles from "../styles/Publications.module.css";
import { GetStaticProps } from "next";

const ORCID_ID = "0009-0008-6423-6334";
const ORCID_API = `https://pub.orcid.org/v3.0/${ORCID_ID}`;
const MY_NAME = "Lenny Metlitsky";

interface Publication {
	title: string;
	journal: string | null;
	year: number | null;
	month: number | null;
	url: string | null;
	authors: string[];
}

interface Props {
	publications: Publication[];
}

const MONTHS = [
	"Jan", "Feb", "Mar", "Apr", "May", "Jun",
	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const Publications = (props: Props) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lenny Metlitsky&apos;s Publications</title>
				<meta name="description" content="Lenny Metlitsky" />
			</Head>
			<main className={styles.main}>
				<h1>Publications</h1>
				<ul className={styles.publications}>
					{props.publications.map((pub) => (
						<li key={pub.title} className={styles.publication}>
							<h2>
								{pub.url ? (
									<a href={pub.url}>{pub.title}</a>
								) : (
									pub.title
								)}
							</h2>
							<p>
								{pub.authors.map((author, i) => (
									<span key={author}>
										{author === MY_NAME ? (
											<b>{author}</b>
										) : (
											author
										)}
										{i < pub.authors.length - 1 && ", "}
									</span>
								))}
							</p>
							<p>
								{pub.journal && <i>{pub.journal}</i>}
								{pub.journal && pub.year && ", "}
								{pub.month && `${MONTHS[pub.month - 1]} `}
								{pub.year}
							</p>
						</li>
					))}
				</ul>
				<p>
					See my{" "}
					<a href={`https://orcid.org/${ORCID_ID}`}>ORCID</a> for
					the full record.
				</p>
			</main>
		</div>
	);
};

const orcidFetch = async (path: string) => {
	const res = await fetch(`${ORCID_API}${path}`, {
		headers: { Accept: "application/json" },
	});
	if (!res.ok) throw new Error(`ORCID request failed: ${res.status}`);
	return res.json();
};

export const getStaticProps: GetStaticProps = async () => {
	const works = await orcidFetch("/works");

	const publications: Publication[] = await Promise.all(
		works.group.map(async (group: any) => {
			// Each group is one work, possibly reported by multiple sources
			const summary = group["work-summary"][0];
			const work = await orcidFetch(`/work/${summary["put-code"]}`);
			const date = summary["publication-date"];
			const doi = group["external-ids"]["external-id"].find(
				(id: any) => id["external-id-type"] === "doi"
			);

			return {
				title: summary.title.title.value,
				journal: summary["journal-title"]?.value ?? null,
				year: date?.year ? Number(date.year.value) : null,
				month: date?.month ? Number(date.month.value) : null,
				url:
					doi?.["external-id-url"]?.value ??
					summary.url?.value ??
					null,
				authors: (work.contributors?.contributor ?? [])
					.map((c: any) => c["credit-name"]?.value)
					.filter(Boolean),
			};
		})
	);

	// Most recent first
	publications.sort(
		(a, b) =>
			(b.year ?? 0) - (a.year ?? 0) || (b.month ?? 0) - (a.month ?? 0)
	);

	return {
		props: { publications },
		// Re-fetch from ORCID at most once a day
		revalidate: 60 * 60 * 24,
	};
};

export default Publications;
