import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../actions/users';
import '../style/products.css';

class UsersSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();

    let term = this.state.term;
    term = term.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    this.props.searchUsers(term);
  }

  handleChange(e) {
    this.setState({ term: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button>Search by Skin Type</button>
      </form>
    );
  }

}


export default connect(null, { searchUsers })(UsersSearch);