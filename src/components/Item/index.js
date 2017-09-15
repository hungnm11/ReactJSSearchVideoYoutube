import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { NavLink } from 'react-router-dom';

class Item extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.no != nextProps.no;
  }

  render() {

    return (
      <CollectionItem key={this.props.key}  >
        <NavLink to={`/view/`} >
          <span className="badge">{this.props.no}</span>
          <div className="thumbnails">
            {/* <img src={thumbImg} /> */}
          </div>
          <div className='title'>
            title
          </div>
        </NavLink>
      </CollectionItem>
    );
  }
}

export default Item;