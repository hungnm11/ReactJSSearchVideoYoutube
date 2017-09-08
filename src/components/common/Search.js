import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { fetchData } from '../../actions';

class Search extends Component {

  constructor(props) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  renderField(field) {
    return (
      <div className="input-field">
        <input 
          {...field.input}
          id={field.id} 
          type={field.type} 
          required 
        />
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    );
  }

  onSubmitForm({keyword}) {   
    this.props.fetchData(keyword)
  }

  render() {
    console.log('PROPS', this.props);
    const { handleSubmit } = this.props;
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <form onSubmit={handleSubmit(this.onSubmitForm)} >
              <Field
                name="keyword"
                component={this.renderField}
                id="search"
                type="search"
              />
            </form>
          </div>
        </nav>
      </div>
    );
  }
};

 const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ fetchData }, dispatch);
 };

export default reduxForm({
  form: 'searchForm'
})(connect(null, mapDispatchToProps)(Search));