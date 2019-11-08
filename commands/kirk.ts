import * as Discord from "discord.js";

export default async function(message: Discord.Message, client: Discord.Client, args: string[]) {
	// makes the bot say something and delete the message. As an example, it's open to anyone to use.
	// To get the "message" itself we join the `args` back into a string with spaces:
	const sayMessage = args.join(" ");
	if ((sayMessage.includes("@everyone") || sayMessage.includes("@here")) && !message.member.hasPermission("ADMINISTRATOR")) {
		message.delete().catch(O_o => {});
		return;
	}
	// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
	message.delete().catch(O_o => {});
	// And we get the bot to say the thing:
	message.channel.send(sayMessage);
}
