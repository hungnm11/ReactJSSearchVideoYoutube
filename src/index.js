import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import './assets/scss/main.scss';

class App extends React.Component {
  render() {
    return (
      <h1 className="title">Hello</h1>
    )
  }
}

render(<App />, document.getElementById('app'));

