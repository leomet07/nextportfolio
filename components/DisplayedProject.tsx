import Image from "next/future/image";
import styles from "../styles/DisplayedProject.module.css";
import { ReceivedProject } from "../types/db_types";

interface Props {
	project: ReceivedProject;
}

function DisplayedProject(props: Props) {
	return (
		<div id={styles.project_container}>
			<div>
				<div id={styles.image_container}>
					<Image
						id={styles.image}
						alt={props.project.name + " Image"}
						src={props.project.images[0]}
						fill
					/>
				</div>
				<h2>{props.project.name}</h2>
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
