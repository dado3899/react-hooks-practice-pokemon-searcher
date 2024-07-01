import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList,search}) {

  const searchedPokemon = pokemonList.filter((pokemon)=>{
    if(pokemon.name.toLowerCase().includes(search.toLowerCase())){
      return true
    }
    return false
  })

  const pokemonComponents = searchedPokemon.map((pokemon)=>{
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })

  // console.log(pokemonCards)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonComponents}
    </Card.Group>
  );
}

export default PokemonCollection;
