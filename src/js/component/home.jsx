import React, { useState, useEffect } from "react";
import SecondCounter from "./secondcounter.js";

const Home = () => {
	const clock = <i class="far fa-clock"></i>;
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="row m-0 vh-100 justify-content-center align-items-center">
			<div
				style={{ width: "6rem", height: "7.5rem", borderRadius: 75 }}
				className="bg-success text-white text-center m-3 pt-4">
				<SecondCounter seconds={clock} />
			</div>
			<div
				style={{ width: "6rem", height: "7.5rem", borderRadius: 75 }}
				className="bg-success text-white text-center m-3 pt-4">
				<SecondCounter num={Math.floor((timer / 100000) % 10)} />
			</div>
			<div
				style={{ width: "6rem", height: "7.5rem", borderRadius: 75 }}
				className="bg-success text-white text-center m-3 pt-4">
				<SecondCounter num={Math.floor((timer / 10000) % 10)} />
			</div>
			<div
				style={{ width: "6rem", height: "7.5rem", borderRadius: 75 }}
				className="bg-success text-white text-center m-3 pt-4">
				<SecondCounter num={Math.floor((timer / 1000) % 10)} />
			</div>
			<div
				style={{ width: "6rem", height: "7.5rem", borderRadius: 75 }}
				className="bg-success text-white text-center m-3 pt-4">
				<SecondCounter num={Math.floor((timer / 100) % 10)} />
			</div>
			<div
				style={{ width: "6rem", height: "7.5rem", borderRadius: 75 }}
				className="bg-success text-white text-center m-3 pt-4">
				<SecondCounter num={Math.floor((timer / 10) % 10)} />
			</div>
			<div
				style={{ width: "6rem", height: "7.5rem", borderRadius: 75 }}
				className="bg-success text-white text-center m-3 pt-4">
				<SecondCounter num={Math.floor((timer / 1) % 10)} />
			</div>
		</div>
	);
};

export default Home;
