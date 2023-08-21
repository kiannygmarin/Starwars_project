import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const PlanetsData = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const detail = store.planetDetails;
	useEffect(() => {
		actions.getPlanetData(params.id)
	}, [])

	return (
		<>
			<div className="jumbotron">
				<main className="container">
					<div className="row justify-content-center align-content center">
						<div className="col-lg-6 mt-4">
							<img className="image-planet"
								src={(params.id) === "1"
                                ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                                : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`
                                }
							/>
						</div>
						<div className="col-lg-6">
							<h1>{detail.name}</h1>
							<ul className="list-group">
								<li className="title-item list-group-item border-light">Diameter ｡･:*˚:✧｡</li>
								<li className="list-group-item bg-transparent text-light border-light">{detail.diameter}</li>
							</ul>
							<ul className="list-group">
								<li className="title-item list-group-item border-light">Climate ｡･:*˚:✧｡</li>
								<li className="list-group-item bg-transparent text-light border-light">{detail.climate}</li>
							</ul>
							<ul className="list-group">
								<li className="title-item list-group-item border-light">Terrain ｡･:*˚:✧｡</li>
								<li className="list-group-item bg-transparent text-light border-light">{detail.terrain}</li>
							</ul>
							<ul className="list-group">
								<li className="title-item list-group-item border-light">Orbital Period ｡･:*˚:✧｡</li>
								<li className="list-group-item bg-transparent text-light border-light">{detail.orbital_period}</li>
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