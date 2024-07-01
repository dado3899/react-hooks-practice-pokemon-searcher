import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  // this is a array
  const [pokemonList,setPokemonList] = useState([])
  // This is a string
  const [search, setSearch] = useState("")
  // console.log(search)
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(r=>r.json())
    .then(data=>setPokemonList(data))
  },[])
  // addPokemon({})
  function addPokemon(newPokemon){
    fetch('http://localhost:3001/pokemon',{
      method: "POST",
      headers:{
        "Content-Type":"application/JSON"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r=>r.json())
    .then(data=>{
      // (data)
      const newPokeArr = [...pokemonList,data]
      setPokemonList(newPokeArr)
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection search={search} pokemonList={pokemonList} />
    </Container>
  );
}

export default PokemonPage;
