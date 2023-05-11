import styled from "styled-components";

export const PokemonHeader = styled.div`
  background-color: #00bbf0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 30vh;
`;
export const PokemonTitle = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
`;
export const PokemonWarning = styled.h1`
  text-align: center;
  background-color: #fdb44b;
  height: 70vh;
  
`;

export const PokemonInput = styled.input`
  font-size: 1rem;
  border-radius: 5px;
  border: 1px double black;
  padding: 10px;
  margin: 20px;
`;
export const PokemonButton = styled.button`
  margin: 10px;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #005792;
  color: white;
`;
// export const FooterBackground = styled.div`
//   background-image: url(${props=> props.pokemon});
//   height: 30vh;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: ;
// `;
