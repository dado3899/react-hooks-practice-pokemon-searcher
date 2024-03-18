import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon,search}) {

  const filteredPKMN = pokemon.filter((poki)=>{
    return poki.name.toLowerCase().includes(search.toLowerCase())
  })

  const pkmnCards = filteredPKMN.map((poki)=>{
    return <PokemonCard key={poki.id} poki={poki}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pkmnCards}
    </Card.Group>
  );
}

export default PokemonCollection;
