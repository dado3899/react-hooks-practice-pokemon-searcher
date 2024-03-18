import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon,setPokemon] = useState([])
  const [search, setSearch] = useState("")

  // console.log(search)

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(r=>r.json())
    .then(data=>{
      setPokemon(data)
    })
  },[])

  function addPokemon(newPokemon){
    fetch('http://localhost:3001/pokemon',{
      method:"POST",
      headers:{
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r=>r.json())
    .then(data=>{
      const newPoki = [...pokemon,data]
      setPokemon(newPoki)
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection search={search} pokemon={pokemon}/>
    </Container>
  );
}

export default PokemonPage;
