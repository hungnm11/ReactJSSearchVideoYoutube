import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { connect } from 'react-redux';
import Card from '../common/Card';
import Footer from '../footer';

class WeekDays extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
  }

  renderListView() {
    return (
      <div >
      <CollectionItem>
      <span className="badge">am / pm</span>
        <div className='title'>
          Monday (Today)
        <span>3 July, 2017</span>
        </div>  
      </CollectionItem>
      <CollectionItem>
      <span className="badge">am / pm</span>
        <div className='title'>
          Monday (Today)
        <span>3 July, 2017</span>
        </div>  
      </CollectionItem>
      <CollectionItem>
      <span className="badge">am / pm</span>
        <div className='title'>
          Monday (Today)
        <span>3 July, 2017</span>
        </div>  
      </CollectionItem>
      <CollectionItem>
      <span className="badge">am / pm</span>
        <div className='title'>
          Monday (Today)
        <span>3 July, 2017</span>
        </div>  
      </CollectionItem>
      <CollectionItem>
      <span className="badge">am / pm</span>
        <div className='title'>
          Monday (Today)
        <span>3 July, 2017</span>
        </div>  
      </CollectionItem>
      <CollectionItem>
      <span className="badge">am / pm</span>
        <div className='title'>
          Monday (Today)
        <span>3 July, 2017</span>
        </div>  
      </CollectionItem>
      <CollectionItem>
      <span className="badge">am / pm</span>
        <div className='title'>
          Monday (Today)
        <span>3 July, 2017</span>
        </div>  
      </CollectionItem>
      </div>
    )
  }

  render() {
    const { history } = this.props;
    return (
      <div className="weekdays">
        <Card
          textHeader="Check in Call"
          btnRight={true}
          btnLeft={true}
          history={history}
          item={this.props.item}
        />
        <Collection>
          {this.renderListView()}
        </Collection>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ item }) => {
  return {
    item
  }
};

export default connect(mapStateToProps)(WeekDays);