import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
    return (
        <Link to={`/pokemon?name=${pokemon.name}`}>
            <div className="bg-white rounded-lg shadow-lg mt-3 flex flex-row items-center px-3">
            <img
                src={`https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
            />
            <h2 className="capitalize">{pokemon.name}</h2>
            </div>
        </Link>
    );
};

export default PokemonCard;
