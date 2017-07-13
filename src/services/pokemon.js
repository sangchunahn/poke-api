import _ from 'lodash';
import axios from 'axios';

const pokeapi = 'http://pokeapi.co/api/v2/'

function getAllPokePage(nextUrl) {
  const url = nextUrl ? nextUrl : `${pokeapi}pokemon`
  return new Promise((fulfill, reject) => {
    axios.get(url).then(response => {
      let pokemon = response.data
      if (_.isEmpty(pokemon.results)) {
        return reject([])
      } else if (pokemon.next) {
        getAllPokePage(pokemon.next).then(morePokemon => {
          return fulfill(_.concat(pokemon.results, morePokemon))
        }) 
      } else {
        fulfill(pokemon.results)
      }
    })
  })
}

export default {
  getAllPokemon() {
    return getAllPokePage().then(response => {
      return response
    })
  }
}