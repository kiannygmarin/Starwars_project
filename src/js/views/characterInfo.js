import React, { useContext, useEffect, useState } from "react";
import { CardCharacter } from "../component/cardForCharacter";
import { Context } from "../store/appContext";



const CharacterInfo = () => {

  const {store, actions} = useContext(Context)  

  return (
    <div className="characterInfo">
      {store.character.map((character, index) => (
        <CardCharacter key={index} character={character} index={index} />
      ))}
    </div>
  )};

export default CharacterInfo;