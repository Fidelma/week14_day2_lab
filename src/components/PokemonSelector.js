import React from 'react';

const PokemonSelector = (props) => {
  const options = props.characters.map((character, index) => {
    return (
      <option value={index} key={index}>{character.name}</option>
    )
  })

  function handleChange(event){
    props.onSelected(event.target.value);
  }


  return (
    <select
    id="pokemon-selector"
    defaultValue="default"
    onChange={handleChange}>
    <option disabled value="default">Choose a character...</option>
    {options}
    </select>
  )
}

export default PokemonSelector;
