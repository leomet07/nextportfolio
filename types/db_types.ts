import { Types } from "mongoose";

export type mongoObjectId = Types.ObjectId | string;

export interface ReceivedProject {
	_id: mongoObjectId;
	name: string;
	description: string;
	images: string[];
	gh_url: string;
	web_url: string;
	index: number;
}
