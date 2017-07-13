import React, { Component } from 'react';
import autoBind from 'react-autobind'
import { observer, inject } from 'mobx-react';
import _ from 'lodash'

@inject('dataStore')
@observer
class Pokemon extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    console.log('this.props: ', this.props)
    this.dataStore = this.props.dataStore;
  }
  componentWillMount() {
    this.dataStore.fetchPokemon();
  }
  renderList() {
    return _.map(this.dataStore.pokemon, pokemon => {
      return (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
        </div>
      )
    })
  }
  render() {
    console.log('this.dataStore.pokemon: ', this.dataStore.pokemon);
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default Pokemon;