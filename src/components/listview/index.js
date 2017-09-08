import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Search from '../common/Search';

class BodyUI extends Component {

  constructor(props) {
    super(props);

    this.selectedItemList = this.selectedItemList.bind(this);
  }

  selectedItemList(item) {
    this.props.fetchItem(item);
  }

  renderListView() {
    const { data: { items }, isFetching } = this.props.res;
    console.log('Hello');
    // return items.map((item) => {
    // console.log('ITEMS', item)
    // return (
    //   <CollectionItem 
    //     key={item.id} 
    //     onClick={this.selectedItemList.bind(null, item)}
    //   >
    //   <Link to={`/view/:${item.id}`}>
    //   <span className="badge">{item.price}</span>
    //     <div className='title'>
    //       {item.title}
    //     <span>{item.description}</span>
    //     </div>  
    //     </Link>       
    //   </CollectionItem>
    // )
    // });
  }

  render() {
    const { isFetching, data } = this.props.res;
    return (
      <div>
        <Search />
        {isFetching && <div>Loading...</div>}
        {
          Object.keys(data).length ? (
            <Collection>
              {this.renderListView()}
            </Collection>
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { res: state.res };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ actions }, dispatch);
// };

export default connect(mapStateToProps, actions)(BodyUI);