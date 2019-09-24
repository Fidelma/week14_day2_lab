import React from 'react';

const PokemonDetail = (props) => {
  if(!props.currentCharacter || !props.details) return null;
  return (
    <div>
    <h2>{props.currentCharacter.name}</h2>
    <p>{props.details.height}</p>
    </div>
  )
}

export default PokemonDetail;
