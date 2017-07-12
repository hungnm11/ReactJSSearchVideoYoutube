import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class Container extends React.Component {
  render() {
    return (
      <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
    )
  }
}

export default Container;