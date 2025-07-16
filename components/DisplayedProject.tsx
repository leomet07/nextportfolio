import Image from "next/image";
import styles from "../styles/DisplayedProject.module.css";
import { ReceivedProject } from "../types/db_types";

interface Props {
	project: ReceivedProject;
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
