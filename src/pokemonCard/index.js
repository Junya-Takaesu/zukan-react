import React from "react";

const PokemonCard = ({ basic, abilities, moves, types }) => {
  return (
    <article>
      <img
        src={`https://pokemon-zukan-j.s3-us-west-2.amazonaws.com/images/${basic.pokemon_no
          .toString()
          .padStart(3, 0)}.png`}
        alt={basic.name}
      />
      <div>
        <h4>なまえ</h4>
        <p>{basic.name}</p>
      </div>
      <div>
        <h4>タイプ</h4>
        <p>{types.join(", ")}</p>
      </div>
      <div>
        <h4>能力</h4>
        <ul>
          {abilities.map((ability, index) => {
            return <li key={index}>{ability}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default PokemonCard;
