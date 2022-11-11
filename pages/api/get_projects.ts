import type { NextApiRequest, NextApiResponse } from "next";
import getProjects from "../../helpers/get_projects_helper";
import dbConnect from "../../lib/dbConnect";
import { ReceivedProject } from "../../types/db_types";

type ResponseData = {
	success: boolean;
	projects?: ReceivedProject[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const db_projects = await getProjects();
				res.status(200).json({ success: true, projects: db_projects });
				break;
			} catch (error) {
				console.error(error);
			}
		/* fallthrough on error */
		default:
			res.status(400).json({ success: false });
			break;
	}
}
