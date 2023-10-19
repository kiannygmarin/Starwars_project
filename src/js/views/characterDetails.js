import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const CharactersData = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const detail = store.characterDetails;
	useEffect(() => {
		actions.getCharacterData(params.id)
	}, [])

	return (
		<>
			<div className="jumbotron">
				<main className="container">
					<div className="row justify-content-center align-content center">
						<div className="col-lg-6 mt-4">
							<img className="image-character"
								src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}

							/>
						</div>
						<div className="col-lg-6">
							<h1>{detail.properties?.name}</h1>
							<ul className="list-group">
								<li className="title-item list-group-item border-light">Birth Year ｡･:*˚:✧｡</li>
								<li className="list-group-item bg-transparent text-light border-light">{detail.properties?.birth_year}</li>
							</ul>
							<ul className="list-group">
								<li className="title-item list-group-item border-light">Height ｡･:*˚:✧｡</li>
								<li className="list-group-item bg-transparent text-light border-light">{detail.properties?.height} cm</li>
							</ul>
							<ul className="list-group">
								<li className="title-item list-group-item border-light">Eye Color ｡･:*˚:✧｡</li>
								<li className="list-group-item bg-transparent text-light border-light">{detail.properties?.eye_color}</li>
							</ul>
							<ul className="list-group">
								<li className="title-item list-group-item border-light">Skin Color ｡･:*˚:✧｡</li>
								<li className="list-group-item bg-transparent text-light border-light">{detail.properties?.skin_color}</li>
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