import { TimerBot } from "../bot.ts";
import log from "utils/logger.ts";

export async function updateAppcationCommands() {
  await TimerBot.helpers.upsertGlobalApplicationCommands(
    TimerBot.commands.array()
  );
  log.info(TimerBot.commands.array());
}
