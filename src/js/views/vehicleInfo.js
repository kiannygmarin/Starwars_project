import React, { useContext, useEffect, useState } from "react";
import { CardVehicle } from "../component/cardForVehicle";
import { Context } from "../store/appContext";



const VehicleInfo = () => {

  const {store, actions} = useContext(Context)  


  return (
    <div className="characterInfo">
      {store.vehicles.map((vehicle, index) => (
        <CardVehicle key={index} vehicle={vehicle} />
      ))}
    </div>
  )};

export default VehicleInfo;