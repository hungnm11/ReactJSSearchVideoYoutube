import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './container';
import reducers from './reducers';
import logger from 'redux-logger';
import BodyUI from './components/contents';
import Details from './components/details';
import './assets/scss/main.scss';

render(
  <Provider store={createStore(reducers, applyMiddleware(logger))} >
   <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={BodyUI} /> 
          <Route path="/view" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

