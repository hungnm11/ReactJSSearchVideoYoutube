import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Container from './container';
import reducers from './reducers';
import logger from 'redux-logger';
import './assets/scss/main.scss';

render(
  <Provider store={createStore(reducers, applyMiddleware(logger))} >
   
        <Container />

  </Provider>
, document.getElementById('root'));

