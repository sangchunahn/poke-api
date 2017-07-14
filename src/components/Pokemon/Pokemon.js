import React, { Component } from 'react';
import autoBind from 'react-autobind'
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router'
import './Pokemon.css'
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
    return _.map(this.dataStore.pokemon, (pokemon, index) => {
      return (
        <div className='pokemon-each' key={pokemon.name}>
          <Link to={`/${index + 1}`}>{pokemon.name}</Link>
        </div>
      )
    })
  }
  render() {
    console.log('this.dataStore.pokemon: ', this.dataStore.pokemon);
    return (
      <div className='container'>
        <div className='pokemon-list'>
        {this.renderList()}
        </div>
      </div>
    );
  }
}

export default Pokemon;