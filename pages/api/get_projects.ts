import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Project from "../../models/Project";
import { ReceivedProject } from "../../types/db_types";

type ResponseData = {
	success: boolean;
	data?: ReceivedProject[];
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
				let db_projects = (await Project.find({})) as ReceivedProject[];

				db_projects = db_projects.sort((a, b) => a.index - b.index);

				res.status(200).json({ success: true, data: db_projects });
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
