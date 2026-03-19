import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
                const data = await response.json();
                setPokemons(data);
                setError(null);
            }
            catch (err) {
                setPokemons([]);
                setError(err.message)
            }
            finally {
                setLoading(false);
            }
        }

        fetchPokemons();
    }, [])

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1 className="mt-5">Pokedex</h1>
                    <ul>
                        {pokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                        ))}
                    </ul>
                </div>
            )}
            {error &&  <p>Error...</p>}
        </>
    )
}

export default Pokedex;