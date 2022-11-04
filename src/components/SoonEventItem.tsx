import type { FunctionComponent } from "react";
import type { Event } from "../utils/schedule";
import dayjs from "dayjs";

const SoonEventItem: FunctionComponent<Event> = ({ name, location, start }) => {
	return (
		<>
			<h2 className="break-normal text-xl font-extrabold text-white">
				{`${name} @ The ${location}`}{" "}
				<span className="gradient-background rounded p-[3px]">{start.format("hh:mmA")}</span>
			</h2>
		</>
	);
};

export default SoonEventItem;
