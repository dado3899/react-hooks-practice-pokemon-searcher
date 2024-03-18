import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poki}) {
  const [front,setFront] = useState(true)
  return (
    <Card onClick={()=>setFront(!front)}>
      <div>
        <div className="image">
          <img src={front? poki.sprites.front : poki.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{poki.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poki.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
