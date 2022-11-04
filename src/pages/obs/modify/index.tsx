import type { NextPage } from "next";

const Manage: NextPage = () => {
	return (
		<div>
			<select className="select" multiple>
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="mercedes">Mercedes</option>
				<option value="audi">Audi</option>
			</select>
		</div>
	);
};

export default Manage;
