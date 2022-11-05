import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import isBetween from "dayjs/plugin/isBetween";
import DayJSUtc from "dayjs/plugin/utc";

// const customParseFormat = require("dayjs/plugin/customParseFormat");
// const timezone = require("dayjs/plugin/timezone");

/*
    Plan:
    - Update events every 10 seconds
    - Loop through events list
    - Set current to any where the current time exists within the range
    - Set next to the next event start within the hour (If any)
    - If none then set current to hacking
*/

dayjs.extend(DayJSUtc);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.extend(isBetween);

dayjs.tz.setDefault("America/Chicago");

export interface Event {
	name: string;
	start: Dayjs;
	end: Dayjs;
	location: string;
}

export interface currentEvents {
	happeningNow: Event[];
	happeningSoon: Event[];
}

const events: Event[] = [
	{
		name: "✏️ Check-in",
		start: dayjs("11/05/22 9:00 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 10:15 AM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "🥯 Breakfast & Snack",
		start: dayjs("11/05/22 9:00 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 10:00 AM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "🏅 Sponsor Fair",
		start: dayjs("11/05/22 9:00 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 10:15 AM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "🗣️ Opening Ceremony",
		start: dayjs("11/05/22 10:30 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 11:15 AM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🍁 Hacking Begins",
		start: dayjs("11/05/22 12:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 12:15 PM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "👥 Team Building Activity",
		start: dayjs("11/05/22 12:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 12:45 PM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "👓 Sticker Scavenger Hunt",
		start: dayjs("11/05/22 12:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 12:45 PM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🚩 CTF Begins",
		start: dayjs("11/05/22 12:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 12:15 PM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🌯 Lunch",
		start: dayjs("11/05/22 1:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 2:00 PM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "🔌 Embedded Security Workshop",
		start: dayjs("11/05/22 2:30 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 3:30 PM", "MM/DD/YY hh:mm A"),
		location: "Ash",
	},
	{
		name: "⛳ Snyk MLH CTF ",
		start: dayjs("11/05/22 2:30 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 3:30 PM", "MM/DD/YY hh:mm A"),
		location: "2nd Ballroom",
	},
	{
		name: "🎮 Intro to Game Dev Workshop",
		start: dayjs("11/05/22 3:45 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 4:30 PM", "MM/DD/YY hh:mm A"),
		location: "Ash Room",
	},
	{
		name: "🌞 Gender Minorities in STEM Panel",
		start: dayjs("11/05/22 3:45 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 4:30 PM", "MM/DD/YY hh:mm A"),
		location: "2nd Ballroom",
	},
	{
		name: "🍝 Dinner",
		start: dayjs("11/05/22 6:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 7:00 PM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "⛳️ Intro To Cybersecurity / CTF",
		start: dayjs("11/05/22 8:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 9:00 PM", "MM/DD/YY hh:mm A"),
		location: "Ash Room",
	},
	{
		name: "🤖 Intro To Machine Learning with Python",
		start: dayjs("11/05/22 8:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 9:00 PM", "MM/DD/YY hh:mm A"),
		location: "Willow Room",
	},
	{
		name: "🌷 Fall Themed Bingo",
		start: dayjs("11/05/22 9:30 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/05/22 10:30 PM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "🌙 Midnight Snack",
		start: dayjs("11/06/22 12:00 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 1:00 AM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🥤 Cup Stacking Team Activity",
		start: dayjs("11/06/22 12:30 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 1:00 AM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "🌮 Breakfast",
		start: dayjs("11/06/22 8:00 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 9:00 AM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "🔊 How To Submit / Pitch Workshop",
		start: dayjs("11/06/22 10:00 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 11:00 AM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🏎️ Wikipedia Racing w/ MLH",
		start: dayjs("11/06/22 11:00 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 12:00 PM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "🍕 Lunch",
		start: dayjs("11/06/22 12:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 1:00 PM", "MM/DD/YY hh:mm A"),
		location: "Galleria",
	},
	{
		name: "✅ Project Submission",
		start: dayjs("11/06/22 12:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 1:30 PM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🎤 Karaoke",
		start: dayjs("11/06/22 3:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 4:00 PM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🏆 Judging",
		start: dayjs("11/06/22 2:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 4:00 PM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🥇 Closing Ceremony",
		start: dayjs("11/06/22 4:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 5:00 PM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🎊 CQ22 Has Ended! 🎊",
		start: dayjs("11/06/22 5:00 PM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/06/22 8:00 PM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🥳 Test Now Event",
		start: dayjs("11/04/22 1:30 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/04/22 3:30 AM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
	{
		name: "🥳 Test Soon Event",
		start: dayjs("11/04/22 2:30 AM", "MM/DD/YY hh:mm A"),
		end: dayjs("11/04/22 3:30 AM", "MM/DD/YY hh:mm A"),
		location: "Ballroom",
	},
];

export function getCurrentEvents(): currentEvents {
	let happeningNow: Event[] = [];
	let happeningSoon: Event[] = [];
	for (const event of events) {
		let now = dayjs().tz("America/Chicago");
		if (now.isBetween(event.start, event.end)) {
			happeningNow.push(event);
			continue;
		} else if (event.start.isBetween(now, now.add(1, "hour"))) {
			happeningSoon.push(event);
			continue;
		}
	}
	return { happeningNow, happeningSoon };
}
