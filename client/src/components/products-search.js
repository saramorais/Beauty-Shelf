import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProducts } from '../actions/products';
import '../style/products.css';

class ProductsSearch extends Component {

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

    this.props.searchProducts(term);
  }

  handleChange(e) {
    this.setState({ term: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button>Search</button>
      </form>
    );
  }

}


export default connect(null, { searchProducts })(ProductsSearch);