import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';

class Item extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate',nextProps, nextState)
  // }

  render() {

    return (
      <CollectionItem >
        Item {this.props.no}
      </CollectionItem>
    );
  }
}

export default Item;