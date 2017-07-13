import {observable, action} from 'mobx';
import pokemonService from '../services/pokemon'
import autoBind from 'react-autobind';
import _ from 'lodash';
import {hashHistory} from 'react-router';

export default class DataStore {
  @observable pokemon = '';

  constructor() {
    autoBind(this);
  }

  @action
  fetchPokemon() {
    return pokemonService.getAllPokemon()
    .then((response) => {
      this.pokemon = response
    })
  }
}
