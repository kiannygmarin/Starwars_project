import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const VehiclesData = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const detail = store.vehicleDetails;
	useEffect(() => {
		actions.getVehicleData(params.id)
	}, [])

	return (
		<>
			<div className="jumbotron">
				<main className="container">
					<div className="row justify-content-center align-content center">
						<div className="col-lg-6 mt-4">
							<img className="image-vehicle"
								src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}

							/>
						</div>
						<div className="col-lg-6">
							<h1>{detail.name}</h1>
							<ul class="list-group">
								<li class="title-item list-group-item border-light">Model ｡･:*˚:✧｡</li>
								<li class="list-group-item bg-transparent text-light border-light">{detail.model}</li>
							</ul>
							<ul class="list-group">
								<li class="title-item list-group-item border-light">Manufacturer ｡･:*˚:✧｡</li>
								<li class="list-group-item bg-transparent text-light border-light">{detail.manufacturer}</li>
							</ul>
							<ul class="list-group">
								<li class="title-item list-group-item border-light">Class ｡･:*˚:✧｡</li>
								<li class="list-group-item bg-transparent text-light border-light">{detail.vehicle_class}</li>
							</ul>
							<ul class="list-group">
								<li class="title-item list-group-item border-light">Crew ｡･:*˚:✧｡</li>
								<li class="list-group-item bg-transparent text-light border-light">{detail.crew}</li>
							</ul>
						</div>
					</div>
		
					<div className="row text-center my-4 py-4">
						<h5>─── ⋆⋅☆⋅⋆ ──</h5>
					</div>
				</main>
			</div>
		</>
	)
}