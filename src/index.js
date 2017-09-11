import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';
import ListView from './components/listview';
import WeekDays from './components/weekdays';
import ViewDetail from './components/viewdetail';
import './assets/scss/main.scss';

render(
  <Provider store={createStore(reducers, applyMiddleware(ReduxThunk, logger))} >
   <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={ListView} /> 
          <Route path="/view/:id" component={ViewDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

