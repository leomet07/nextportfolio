import Image from "next/image";
import styles from "../styles/DisplayedProject.module.css";
import { Project } from "../types/project";

interface Props {
	project: Project;
	// On phones the first card's image is the biggest thing on screen, so it
	// loads right away instead of waiting until it's scrolled into view.
	isFirst?: boolean;
}

function DisplayedProject(props: Props) {
	const chosen_url = props.project.web_url || props.project.gh_url;
	const image = (
		<div className={styles.image_container}>
			<Image
				className={styles.image}
				alt={props.project.name + " Image"}
				src={props.project.images[0]}
				fill
				// Cards are at most 400px wide with 10px padding, so the image is
				// never wider than 380px. (A "vw" value here would make Next drop
				// the srcset candidates under 640px.)
				sizes="380px"
				unoptimized={props.project.animated}
				loading={props.isFirst ? "eager" : "lazy"}
				fetchPriority={props.isFirst ? "high" : undefined}
			/>
		</div>
	);
	const name = <h2>{props.project.name}</h2>;
	return (
		<div className={styles.project_container}>
			<div>
				{/* Projects without a link just show their image and name. */}
				{chosen_url ? <a href={chosen_url}>{image}</a> : image}
				{chosen_url ? (
					<a className={styles.name_link} href={chosen_url}>
						{name}
					</a>
				) : (
					name
				)}

				<p
					dangerouslySetInnerHTML={{
						__html: props.project.description,
					}}
				></p>
			</div>
		</div>
	);
}

export default DisplayedProject;
