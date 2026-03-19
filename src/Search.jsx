import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const Search = () => {
    const [pokemons, setPokemons] = useState([]);
    const [input, setInput] = useState("");
    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(input.toLowerCase())
    );

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
            const data = await response.json();
            setPokemons(data);
        }

        fetchPokemons();
    }, [])

    return (
        <div className="flex-1">
            <h1 className="mt-5">Search a Pokemon</h1>
            <input 
                type="text"
                placeholder="Enter Pokemon name..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="text-orange-700 text-center text-sm px-10 py-1 m-3 focus:outline-none"
            />
            <ul>
                {input !== "" && (filteredPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                )))}
            </ul>
            {filteredPokemons.length === 0 && input.trim() !== "" && <p>No Pokemon Found...</p>}
        </div>
    )
}

export default Search;