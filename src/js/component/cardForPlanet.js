import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from '../store/appContext';

export const CardPlanet = (props) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="eachCard">
			<div className="card m-2">
				
				<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${props.index + 1}.jpg`}/>
    
				<div className="card-body">
					<h5 className="card-title">{props.planet.name}</h5>
					<Link to={`/data/planet/${props.index+1}`}>
					<button type="button" className="btn btn-outline-info me-2">
						Learn more
					</button>
					</Link>
											<button className="btn btn-warning" onClick={() => {
                                            if (!store.favorites.includes(props.planet.name)) {
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