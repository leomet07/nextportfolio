import Image from "next/image";
import styles from "../styles/DisplayedProject.module.css";
import { Project } from "../types/project";

interface Props {
	project: Project;
}

function DisplayedProject(props: Props) {
	const chosen_url = props.project.web_url || props.project.gh_url;
	return (
		<div id={styles.project_container}>
			<div>
				<a href={chosen_url}>
					<div id={styles.image_container}>
						<Image
							id={styles.image}
							alt={props.project.name + " Image"}
							src={props.project.images[0]}
							fill
							// Cards are at most 400px wide with 10px padding, so the image is
							// never wider than 380px. (A "vw" value here would make Next drop
							// the srcset candidates under 640px.)
							sizes="380px"
							unoptimized={props.project.animated}
						/>
					</div>
				</a>
				<a id={styles.name_link} href={chosen_url}>
					<h2>{props.project.name}</h2>
				</a>

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
