import { TimerBot } from "../bot.ts";
import { Command } from "lib/mod.ts";

export function createCommand(command: Command) {
  if (!command.devOnly) TimerBot.commands.set(command.name, command);
}
