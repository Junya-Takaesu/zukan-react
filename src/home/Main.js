import React, { useState, useEffect } from "react";
import pokemonsJson from "../pokemons.json";
import PokemonCard from "../pokemonCard";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemonJson = async () => {
    setPokemons(pokemonsJson.slice(0, 10));
  };

  const isInView = (el) => {
    const box = el.getBoundingClientRect();
    const viewPortTop = window.innerHeight;
    const viewPortBottom = 0;
    return viewPortBottom <= box.bottom && box.top < viewPortTop;
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
