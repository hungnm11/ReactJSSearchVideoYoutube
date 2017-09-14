import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize';
import { bindActionCreators } from 'redux';
import ReduxInfiniteScroll from 'redux-infinite-scroll';
import * as actions from '../../actions';
import Search from '../common/Search';

class List extends Component {

  constructor(props) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);
  }



  componentDidMount() {
  

    // window.addEventListener("scroll", () => {
      
    //   const nextPage = this.props.res.data.nextPageToken;
    //   console.log('hello', nextPage);
    //   const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    //   const body = document.body, html = document.documentElement;
    //   const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //   const windowBottom = windowHeight + window.pageYOffset;
    //   if (windowBottom >= docHeight) {
    //     this.props.fetchData(nextPage)
    //   }
    // });

  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll, false);
  // }

  onLoadMore() {
    this.props.fetchData();
  }

  onScroll() {
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body, html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log('OK');
        this.props.fetchData();
      }
  }

  renderListView() {
    console.log('PROPS', this.props);
    const { data: { items }, isFetching } = this.props.res;
    return items.map((item, i) => {
    const thumbImg = item.snippet.thumbnails.default.url;
    return (
      <CollectionItem 
        key={item.etag} 
      >
      <NavLink to={`/view/${item.id.videoId}`} >
      <span className="badge">{i}</span>
        <div className="thumbnails">
          <img src={thumbImg} />
        </div>
        <div className='title'>
          {item.snippet.title}
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
        {/* <Search /> */}
        {isFetching && <div>Loading...</div>}
        {
          Object.keys(data).length ? (
            <ReduxInfiniteScroll
              items={this.renderListView()}
              loadMore={this.onLoadMore.bind(this)}
            />
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

export default connect(mapStateToProps, actions)(List);