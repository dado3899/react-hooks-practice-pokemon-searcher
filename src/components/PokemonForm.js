import React from "react";
import { Form } from "semantic-ui-react";
function PokemonForm({addPokemon}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          // console.log(e.target.fronturl)
          const newPokemon = {
            sprites:{
              back: e.target.backUrl.value,
              front: e.target.frontUrl.value
            },
            name: e.target.name.value,
            hp: e.target.hp.value
          }
          addPokemon(newPokemon)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
