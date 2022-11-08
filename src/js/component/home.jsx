import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("red");
	
	return (
		<div className="traffic_light">
			<div onClick={() => setColor("red")} className={"red"+((color === "red") ? " halo" : "")}></div>
			<div onClick={() => setColor("orange")} className={"orange"+((color === "orange") ? " halo" : "")}></div>
			<div onClick={() => setColor("green")} className={"green"+((color === "green") ? " halo" : "")}></div>
		</div>		
	);
};

export default Home;

