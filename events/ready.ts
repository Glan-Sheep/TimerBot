import { TimerBot } from "../bot.ts";
import log from "utils/logger.ts";

TimerBot.events.ready = () => {
  log.info(`[READY]`);
};
