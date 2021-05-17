import React, { useState, useEffect } from "react";
import pokemonsJson from "../pokemons.json";
import PokemonCard from "../pokemonCard";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemonJson = async () => {
    setPokemons(pokemonsJson.slice(0, 40));
  };

  useEffect(() => {
    fetchPokemonJson();
  }, []);

  return (
    <div className="home-wrapper">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.basic.id} {...pokemon} />;
      })}
    </div>
  );
};

export default Main;
