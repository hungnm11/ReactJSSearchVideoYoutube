import React from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = ({ textHeader, btnRight, btnLeft, history }) => {
  console.log('Histpry', history);

  return (
    <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
      { btnRight ? <Button floating large className='red right' waves='light' icon='close' /> : ''}
        <span className="brand-logo center">{textHeader}</span>
      { btnLeft ? <Button floating large className='red left' waves='light' icon='arrow_back' onClick={()=> history.push('/')} /> : ''}
      </div>
    </nav>
    </div>
  );
};

export default Header;