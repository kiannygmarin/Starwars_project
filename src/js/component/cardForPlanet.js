import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from '../store/appContext';

export const CardPlanet = (props) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="eachCard">
			<div className="card m-2">
				
				<img className="card-img-top" src={
    props.planet.uid === "1"
      ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
      : "https://starwars-visualguide.com/assets/img/planets/" +
        props.planet.uid +
        ".jpg"
  } />
				<div className="card-body">
					<h5 className="card-title">{props.planet.name}</h5>
					<Link to={`/data/planet/${props.planet.uid}`}>
					<button type="button" className="btn btn-outline-info me-2">
						Learn more
					</button>
					</Link>
					<button className="btn btn-warning" onClick={() => {
                                            if (!store.favorites.includes(props.planet.namee)) {
                                                actions.addFavorite(props.planet.name);
                                            }
                                        }}> {
                                                store.favorites.includes(props.planet.name) ? '★' : '☆'
                                            }</button>
				</div>
				
			</div>
		</div>
	);
};