import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Search from '../common/Search';

class BodyUI extends Component {

  constructor(props) {
    super(props);
  }

  renderListView() {
    const { data: { items }, isFetching } = this.props.res;
    return items.map((item) => {
    console.log('ITEMS', item)
    const thumbImg = item.snippet.thumbnails.default.url;
    return (
      <CollectionItem 
        key={item.etag} 
      >
      <NavLink to={`/view/${item.id.videoId}`} >
      <span className="badge">View</span>
        <div className="thumbnails">
          <img src={thumbImg} />
        </div>
        <div className='title'>
          {item.snippet.title}
        {/* <span>{item.snippet.description}</span> */}
        </div>  
        </NavLink>       
      </CollectionItem>
    )
    });
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