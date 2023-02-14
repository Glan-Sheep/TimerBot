import { TimerBot } from "../bot.ts";
import log from "utils/logger.ts";

TimerBot.events.messageCreate = (bot, message) => {
  if(message.mentionedUserIds.includes(bot.id)) {
    bot.helpers.addReaction(message.channelId, message.id, "🤧")
  }
}
