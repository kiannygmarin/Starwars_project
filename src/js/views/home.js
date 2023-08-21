import React from "react";
import "../../styles/home.css";
import CharacterInfo from "./characterInfo";
// import VehicleInfo from "./vehicleInfo";
import PlanetInfo from "./planetInfo";

export const Home = () => (
		<div className="characterCards">
			<h1>Characters</h1>
			<CharacterInfo/>
			<h1>Vehicles</h1>
			{/* <VehicleInfo/> */}
			<h1>Planets</h1>
			<PlanetInfo/>
		
			
	</div>
);