import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';

class Item extends Component {

  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate',nextProps.no)
    return this.props.no != nextProps.no;
  }

  render() {

    return (
      <CollectionItem >
        Item {this.props.no}
      </CollectionItem>
    );
  }
}

export default Item;