import React, {Component} from 'react';
import PokemonSelector  from '../components/PokemonSelector.js';
import PokemonDetail  from '../components/PokemonDetail.js';

class PokemonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null,
      currentCharacterDetail: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount(){
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151"

    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({characters: characters.results}))
    .catch(err => console.error)
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter}, function(){
      const url = this.state.currentCharacter.url;
      fetch(url)
      .then(res => res.json())
      .then(details => this.setState({currentCharacterDetail: details}))
      .catch(err => console.error)
    });
  }

  render(){
    return(
      <>
      <PokemonSelector characters={this.state.characters} onSelected={this.handleCharacterSelected}/>
      <PokemonDetail currentCharacter={this.state.currentCharacter} details={this.state.currentCharacterDetail}/>
      </>
    )
  }

}

export default PokemonContainer;
