import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collection, CollectionItem } from 'react-materialize';

class BodyUI extends Component {

  renderListView() {
    const { data } = this.props;
    return data.map((item) => {
        return (
          <CollectionItem key={item.id} href='#'>
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
    console.log('PROPS==>', this.props);
    
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

export default connect(mapStateToProps)(BodyUI);