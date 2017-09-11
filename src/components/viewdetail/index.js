import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

class ViewDetail extends Component {
  render() {
    const videoId = this.props.match.params.id;
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log('PROPS===>', this.props)
    return (
      <div id="view-details">
        Detail
        <iframe src={url} frameBorder="0"></iframe>
      </div>
    );
  }
}

export default ViewDetail;