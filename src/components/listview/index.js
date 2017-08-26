import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Header from '../common/Header';

class BodyUI extends Component {

  constructor(props) {
    super(props);

    this.selectedItemList = this.selectedItemList.bind(this);
  }

  selectedItemList(item) {
    
    this.props.fetchItem(item);
  }

  renderListView() {
    const { data } = this.props;
    return data.map((item) => {
        return (
          <CollectionItem 
            key={item.id} 
            onClick={this.selectedItemList.bind(null, item)}
          >
          <Link to={`/view/:${item.id}`}>
          <span className="badge">{item.price}</span>
            <div className='title'>
              {item.title}
            <span>{item.description}</span>
            </div>  
            </Link>       
          </CollectionItem>
        )
    });
  }

  render() {
    return (
      <div>
        <Header 
          textHeader="Select a Session"
          btnRight={true}
        />
        <Collection>
          {this.renderListView()}
        </Collection>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ actions }, dispatch);
// };

export default connect(mapStateToProps, actions)(BodyUI);