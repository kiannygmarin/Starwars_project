import React, { useContext, useEffect, useState } from "react";
import { CardPlanet } from "../component/cardForPlanet";
import { Context } from "../store/appContext";



const PlanetInfo = () => {

  const {store, actions} = useContext(Context)  


  return (
    <div className="characterInfo">
      {store.planets.map((planet, index) => (
        <CardPlanet key={index} planet={planet} index={index} />
      ))}
    </div>
  )};

export default PlanetInfo;