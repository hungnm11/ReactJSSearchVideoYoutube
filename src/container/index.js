import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderUI from '../components/header';
import BodyUI from '../components/contents';
import FooterUI from '../components/footer';

class Container extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={BodyUI} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Container;