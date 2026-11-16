import styles from "../styles/Home.module.css";
import { MdLocationPin } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi";
import Seo from "../components/Seo";
import { PROFILE_URLS, SITE_NAME, SITE_URL } from "../lib/site";

// Tells search engines who the site is about, and which other profiles are the same person.
const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{ "@type": "WebSite", name: SITE_NAME, url: SITE_URL + "/" },
		{
			"@type": "Person",
			"@id": SITE_URL + "/#person",
			name: SITE_NAME,
			url: SITE_URL + "/",
			affiliation: {
				"@type": "CollegeOrUniversity",
				name: "Cornell University",
				url: "https://www.cornell.edu",
			},
			sameAs: Object.values(PROFILE_URLS),
		},
	],
};

const Home = () => {
	return (
		<div className={styles.container}>
			<Seo
				title="Lenny Metlitsky | Environmental Engineering & Climate Modeling"
				description="Lenny Metlitsky is an environmental engineering student at Cornell specializing in climate modeling and machine learning."
				path="/"
				jsonLd={jsonLd}
			/>

			<main className={styles.main}>
				<section id={styles.titles_container}>
					<h1 className={styles.title}>Hello, I&apos;m Lenny</h1>
					<p id={styles.pronouns}>(he/him/his)</p>
				</section>
				<section>
					<p>
						I&apos;m Lenny Metlitsky, and I&apos;m a third year{" "}
						<a href="https://cals.cornell.edu/environmental-engineering">
							environmental engineering
						</a>{" "}
						student at Cornell University&apos;s College of
						Agriculture and Life Sciences. I&apos;m interested in
						using climate modeling techniques to understand how
						environmental change will affect people&apos;s lives
						across the world.
					</p>
					<p>
						After spending many years in my youth and early career
						studying computer science and interning as a data
						scientist, I first began environmental modeling work at
						the{" "}
						<a href="https://www.giss.nasa.gov/edu/ccri/">
							NASA Climate Change Research Initiative
						</a>
						, where I worked to develop a{" "}
						<a href="https://www.giss.nasa.gov/pubs/abs/gr05210v.html">
							machine learning model to predict Harmful Algal
							Blooms
						</a>
						. Since then, I&apos;ve also broadened my research to{" "}
						<a href="https://doi.org/10.1016/j.buildenv.2026.115327">
							forecast extreme heat within cities underground
						</a>
						, and I&apos;m developing a new model to downscale
						high-resolution, high-frequency temperature data for use
						within cities.
					</p>
					<p>
						At Cornell, I&apos;m researching to better understand
						mercury cycling within ecosystems at Dr. Gerson&apos;s{" "}
						<a href="https://gersonlab.weebly.com/">
							Watershed Biogeochemistry in the Anthropocene Lab
						</a>
						, and I&apos;m also the lead of the{" "}
						<a href="https://cornellgeodata.com">Cornell GeoData</a>
						, a university project team that builds low-cost sensors
						to assess environmental trends within Tompkins County
						and the broader surrounding region.
					</p>
				</section>
				<section id={styles.other_info_container}>
					<a href="/resume.pdf" className={styles.line_container}>
						<HiOutlineNewspaper className={styles.line_icon} />
						My resume
					</a>
					<div className={styles.line_container}>
						<MdLocationPin className={styles.line_icon} /> New York
						City
					</div>
					<a
						href="https://www.buymeacoffee.com/leomet07"
						className={styles.line_container}
					>
						<SiBuymeacoffee className={styles.line_icon} />
						Buy Me A Coffee
					</a>
				</section>
			</main>
		</div>
	);
};

export default Home;
