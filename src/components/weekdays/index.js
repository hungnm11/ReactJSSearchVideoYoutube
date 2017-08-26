import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';

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
        <Header
          textHeader="Check in Call"
          btnRight={true}
          btnLeft={true}
          history={history}
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