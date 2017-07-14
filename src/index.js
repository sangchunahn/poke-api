import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import DataStore from './stores/DataStore'
import './index.css';
import App from './components/App';
import Pokemon from './components/Pokemon/Pokemon'
import PokemonDetails from './components/Pokemon/PokemonDetails/PokemonDetails'

const dataStore = new DataStore();

ReactDOM.render(
  <Provider dataStore={dataStore}>
    <Router history={hashHistory} onUpdate={ () => { handleRouteChange(this.state); }}>
      <Route path='/' component={ App }>
        <Route path='/pokemon' component={ Pokemon }>
          <Route path ='/:id' component={ PokemonDetails }/>
        </Route>
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));

function handleRouteChange(routeState) {
  console.log('Route change', routeState);
}

// For debugging purposes with react-devtool Chrome extension
window.React = React;