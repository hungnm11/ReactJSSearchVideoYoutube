import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

class BodyUI extends Component {

  constructor(props) {
    super(props);

    this.selectedItemList = this.selectedItemList.bind(this);
  }

  selectedItemList(item) {
    console.log('hello', item);
  }

  renderListView() {
    const { data } = this.props;
    return data.map((item) => {
        return (
          <CollectionItem 
            key={item.id} 
            href='#'
            onClick={this.selectedItemList.bind(null, item)}
          >
          <span className="badge">{item.price}</span>
            <div className='title'>
              {item.title}
            <span>{item.description}</span>
            </div>          
          </CollectionItem>
        )
    });
  }

  render() {
    return (
      <Collection>
        {this.renderListView()}
      </Collection>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyUI);