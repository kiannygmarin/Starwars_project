import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from '../store/appContext';

export const CardVehicle = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="eachCard">
			<div className="card m-2">
				<img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.vehicle.uid + ".jpg"} />
				<div className="card-body">
					<h5 className="card-title">{props.vehicle.name}</h5>
					<Link to={`/data/vehicle/${props.vehicle.uid}`}>
					<button type="button" className="btn btn-outline-info me-2">
						Learn more
					</button>
					</Link>
					<button className="btn btn-warning" onClick={() => {
                                            if (!store.favorites.includes(props.vehicle.namee)) {
                                                actions.addFavorite(props.vehicle.name);
                                            }
                                        }}> {
                                                store.favorites.includes(props.vehicle.name) ? '★' : '☆'
                                            }</button>
				</div>
				
			</div>
		</div>
	);
};