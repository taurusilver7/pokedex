import React from "react";
import { useAppSelector } from "../app/hooks";
import { Login } from "../components";
import { Wrapper } from "../sections";

const MyList = () => {
	const { userInfo } = useAppSelector(({ app }) => app);

	return (
		<div className="list">
			{/* Login component or Pokemon grid based on the uerInfo state value */}
			{!userInfo && <Login />}
		</div>
	);
};

export default Wrapper(MyList);
