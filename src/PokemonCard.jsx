import React from "react";

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="bg-white rounded-md shadow-md mt-2 flex flex-col items-center p-3">
        <img
            src={`https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            alt={pokemon.name}
            className="max-w-[150px] mb-3"
        />
        <h2 className="capitalize">{pokemon.name}</h2>
        </div>
    );
};

export default PokemonCard;
