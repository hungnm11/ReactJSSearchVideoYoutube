import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { connect } from 'react-redux';
import Card from '../common/Card';

class WeekDays extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
  }

  render() {
    console.log('PROPS==>', this.props)
    const { title, description } = this.props.item;
    const { history } = this.props;
    return (
      <div>
        <Card
          textHeader="Check in Call"
          btnRight={true}
          btnLeft={true}
          history={history}
          item={this.props.item}
        />
        {title}
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