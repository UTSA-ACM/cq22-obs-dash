import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Snowfall from "react-snowfall";
import Head from "next/head";
import Clock from "react-live-clock";

import NowEventItem from "../../components/NowEventItem";
import SoonEventItem from "../../components/SoonEventItem";

import { getCurrentEvents } from "../../utils/schedule";
import type { Event } from "../../utils/schedule";

const OBS: NextPage = () => {
	const [showFallEffect, setShowFallEffect] = useState(false);
	const [nowEvents, setNowEvents] = useState<Event[]>([]);
	const [soonEvents, setSoonEvents] = useState<Event[]>([]);

	useEffect(() => {
		setShowFallEffect(true);

		const events = getCurrentEvents();
		setNowEvents(events.happeningNow);
		setSoonEvents(events.happeningSoon);

		const interval = setInterval(() => {
			const events = getCurrentEvents();
			setNowEvents(events.happeningNow);
			setSoonEvents(events.happeningSoon);
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Head>
				<title>CQ OBS View</title>
			</Head>
			{showFallEffect ? <Snowfall speed={[0.1, 0.2]} /> : null}
			<Image
				src="/img/clipart/tree.svg"
				className="absolute bottom-0 right-10"
				alt="CQ Tree"
				width={300}
				height={300}
			/>
			<div className="grid h-screen w-full grid-cols-2 overflow-y-auto bg-cq-lightgreen">
				<div className="z-10 flex flex-col items-start justify-center p-[10px] pl-[30px]">
					<h1 className="header-gradient font-sans text-6xl font-extrabold">CodeQuantum 2022</h1>
					<br />
					<br />
					<div className="flex w-full flex-col justify-center">
						<div>
							<h3 className="header-gradient flex flex-col text-xl font-extrabold">
								Happening Now:
							</h3>
							{nowEvents.length > 0 ? (
								nowEvents.map((event) => <NowEventItem key={Math.random()} {...event} />)
							) : (
								<p className="break-normal text-xl font-extrabold text-white">🍁 Hacking</p>
							)}
							<br />
						</div>
						<div>
							<h3 className="header-gradient flex flex-col text-xl font-extrabold">Up Next:</h3>
							{soonEvents.length > 0 ? (
								soonEvents.map((event) => <SoonEventItem key={Math.random()} {...event} />)
							) : (
								<p className="break-normal text-xl font-extrabold text-white">🍁 Hacking 2?</p>
							)}
							<br />
							<br />
						</div>

						<div>
							<h3 className="header-gradient flex flex-col text-xl font-extrabold">Resources:</h3>
							<h2 className="break-normal text-xl font-extrabold text-white">
								go.cqhacks.org/guide
							</h2>
							<h2 className="break-normal text-xl font-extrabold text-white">
								go.cqhacks.org/schedule
							</h2>
							<br />
						</div>
						<br />
						<div className="flex h-[95px] max-w-[580px] items-center justify-center rounded-lg bg-white p-[5px]">
							<Clock
								className="header-gradient font-sans text-6xl font-extrabold"
								format="h:mm A"
								ticking={true}
							/>
						</div>
					</div>
				</div>
				<div className="bg-cq-darkgreen"></div>
			</div>
		</>
	);
};

export default OBS;
