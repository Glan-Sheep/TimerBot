import { TimerBot } from "../bot.ts";

console.log("Starting the program...");

export default function init() {
  let already = false;
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours === 9 && minutes === 42 && !already) {
      TimerBot.helpers.sendMessage(931066451165577268n, {
        content: `おはようございます!
今日は${date.getMonth() + 1}月${date.getDate()}日${
          dayList[date.getDay()]
}曜日です!`,
      });
      already = true;
    }
  }, 1000);
}

const dayList = ["日", "月", "火", "水", "木", "金", "土"];
