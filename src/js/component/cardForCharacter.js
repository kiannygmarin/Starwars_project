import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from '../store/appContext';



export const CardCharacter = (props) => {
	const { store, actions } = useContext(Context);

  
	return (
	  <div className="eachCard">
		<div className="card m-2">
		  <img
			className="card-img-top"
			src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`}
		  />
		  <div className="card-body">
			<h5 className="card-title">{props.character.name}</h5>
			<h5 className="card-title">{props.character.gender}</h5>
			<Link to={`/data/character/${props.index + 1}`}>
			  <button type="button" className="btn btn-outline-info me-2">
				Learn more
			  </button>
			</Link>
			<button
			  className="btn btn-warning"
			  onClick={() => {
				if (!store.favorites.includes(props.character.name)) {
				  actions.addFavorite(props.character.name);
				}
			  }}
			>
			  {store.favorites.includes(props.character.name) ? "★" : "☆"}
			</button>
		  </div>
		</div>
	  </div>
	);
  };


