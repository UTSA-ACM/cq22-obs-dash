import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

	return (
		<>
			<Head>
				<title>CQ OBS Dash</title>
			</Head>
			<div>
				<h1>
					Hello! This is the CQ OBS Dash. If you are not a staff member, please ignore this and
					check out our home page @{" "}
					<a className="text-blue-500 underline" href="https://cqhacks.org/">
						cqhacks.org
					</a>
					.
				</h1>
			</div>
		</>
	);
};

export default Home;
