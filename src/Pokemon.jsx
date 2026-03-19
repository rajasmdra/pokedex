import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const query = new URLSearchParams(useLocation().search);
    const pokemonName = query.get("name");

    useEffect(() => {
        const fetchPokemon = async () => {
            if (!pokemonName) return;
            try {
                const response = await fetch(`https://pokedex.mimo.dev/api/pokemon/${pokemonName}`);
                const data = await response.json();
                setPokemon(data);
                setError(null);
            } catch (err) {
                setPokemon(null);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchPokemon();
    }, [pokemonName])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {pokemon && (
                <div className="flex flex-col items-center text-sm">
                    <h1 className="text-lg">Pokemon Details</h1>
                    <img 
                        src={pokemon.sprites.front_default} 
                        alt={pokemon.name} 
                        className="w-xs"
                    />
                    {pokemon.height && <p>Height: {pokemon.height}</p>}
                    {pokemon.weight && <p>Weight: {pokemon.weight}</p>}
                    {pokemon.abilities && <p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>}
                    {pokemon.types && <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>}
                </div>
                )
            }
        </div>
    )
}

export default Pokemon;