import type { FunctionComponent } from "react";
import type { Event } from "../utils/schedule";
import dayjs from "dayjs";

const NowEventItem: FunctionComponent<Event> = ({ name, location, start }) => {
	return (
		<>
			<h2 className="break-normal text-xl font-extrabold text-white">{`${name} @ The ${location}`}</h2>
		</>
	);
};

export default NowEventItem;
