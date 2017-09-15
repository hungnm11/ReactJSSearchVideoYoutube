import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Collection, CollectionItem } from 'react-materialize';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Search from '../common/Search';
import Item from '../Item';

class List extends Component {

  componentWillMount() {
    let nextPageToken;
    this.props.fetchData(nextPageToken);
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const nextPage = this.props.list.res.nextPageToken;
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body, html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        nextPage && this.props.fetchData(nextPage)
      }
    });
  }

  renderListView() {
    const { data, isFetching } = this.props.list.res;
    let list = data.map((item, i) => {
    const thumbImg = item.snippet.thumbnails.default.url;
      return (
        <Item key={i} no={i} />
      );
    });

    return <div>{list}</div>
  }

  render() {
    const { isFetching, data } = this.props.list.res;
    return (
      <div>
        <Search />
        {isFetching && data && <div>Loading...</div>}
        {
          data.length ? (
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
  return { list: state };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ actions }, dispatch);
// }

export default connect(mapStateToProps, actions)(List);