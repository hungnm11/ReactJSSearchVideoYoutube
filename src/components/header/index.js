import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

class HeaderUI extends Component {
  render() {
    return (
      <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
        <Button floating large className='red' waves='light' icon='close' />
          <span className="brand-logo center">Select a Session</span>
          
        </div>
      </nav>
      </div>
    )
  }
}

export default HeaderUI;