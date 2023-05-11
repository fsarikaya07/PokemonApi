import { Axios } from "axios";
import React, { useEffect } from "react";
import { PokemonContainer, PokemonImage } from "./Character.styled";

const Character = ({ pokemon }) => {
  const { name, img, hp, attack, defense, type } = pokemon;
  return (
    <PokemonContainer>
      <h1>Name: {name}</h1>
      <PokemonImage src={img} />
      <h2>Hp:{hp}</h2>
      <h2>Attack:{attack}</h2>
      <h2>Defense:{defense}</h2>
      <h2>Type:{type}</h2>
    </PokemonContainer>
  );
};

export default Character;
