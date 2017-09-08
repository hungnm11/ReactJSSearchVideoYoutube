import React from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const Card = ({ textHeader, btnRight, btnLeft, history }) => {

  return (

    <div className="col s12 m12">
      <div className="card darken-1">
        <Button floating large className='red right' waves='light' icon='close' onClick={()=> history.push('/')} />
        <div className="card-content">
          <span className="card-title">Check in Call</span>
          {/* <p>{description}</p> */}
        </div>
        <div className="card-action">
          <span className="card-title">Select a Day</span>
          {/* <span>{description}</span> */}
        </div>
        <Button floating large className='red left' waves='light' icon='arrow_back' onClick={()=> history.push('/')} />
      </div>
    </div>

  );
};

export default Card;