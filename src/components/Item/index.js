import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { NavLink } from 'react-router-dom';

class Item extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.index != nextProps.index;
  }

  render() {
    const { item, index } = this.props;
    const thumbImg = item.snippet.thumbnails.default.url;
    return (
      <CollectionItem>
        <NavLink to={`/view/${item.id.videoId}`} >
          <span className="badge">{index}</span>
          <div className="thumbnails">
            <img src={thumbImg} />
          </div>
          <div className='title'>
            {item.snippet.title}
          </div>
        </NavLink>
      </CollectionItem>
    );
  }
}

export default Item;