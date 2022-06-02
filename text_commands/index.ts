import * as Discord from "discord.js";

// Add new commands to this file

import ping from "./ping";
import kirk from "./kirk";
import kick from "./kick";
import ban from "./ban";
import purge from "./purge";
import restart from "./restart";
import shutdown from "./shutdown";
import help from "./help";
import pingu from "./pingu";
import watch from "./watch";
import endofwatch from "./endofwatch";
import watchrule from "./watchrule";
import unwatchrule from "./unwatchrule";
import movewatch from "./movewatch";

const commands: {
	[command: string]: (message: Discord.Message, client: Discord.Client, args: string[]) => Promise<void>;
} = {
	help,
	ping,
	kirk,
	kick,
	ban,
	purge,
	restart,
	shutdown,
	pingu,
	watch,
	endofwatch,
	watchrule,
	unwatchrule,
	movewatch
};

export default async function(
	command: string,
	message: Discord.Message,
	client: Discord.Client,
	args: string[]
): Promise<void> {
	await commands[command]?.(message, client, args);
}