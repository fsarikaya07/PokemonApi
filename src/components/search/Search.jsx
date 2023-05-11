import React, { useEffect } from "react";
import {
  FooterBackground,
  PokemonButton,
  PokemonForm,
  PokemonHeader,
  PokemonInput,
  PokemonTitle,
  PokemonWarning,
} from "./Search.styled";
import { useState } from "react";
import Character from "../character/Character";
import axios, { Axios } from "axios";

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    background: "",
  });

  const searchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          img: data.sprites?.front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          type: data.types[0].type.name,
          background: data.sprites.back_default,
        });
        console.log(data);
      });
    setIsOpen(true);
  };

  return (
    <>
      <PokemonHeader>
        <PokemonTitle>Pokemon Stats</PokemonTitle>
        <PokemonInput
          type="text"
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <PokemonButton onClick={searchPokemon}>Search Pokemon</PokemonButton>
      </PokemonHeader>
      {!isOpen ? (
        <PokemonWarning>Plaese Pokemon Enter Name </PokemonWarning>
      ) : (
        <Character pokemon={pokemon} />
      )}
      {/* <FooterBackground pokemon={pokemon.background} >
        
      </FooterBackground> */}
    </>
  );
};

export default Search;
