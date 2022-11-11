import styles from "../styles/DisplayedProject.module.css";
import { ReceivedProject } from "../types/db_types";

interface Props {
	project: ReceivedProject;
}

function DisplayedProject(props: Props) {
	return (
		<div id={styles.project_container}>
			<div>
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
