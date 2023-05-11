export const searchPokemon = async ({pokemonName}) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          img: data.sprites?.front_default,
        });
        console.log(data);
      });
  };