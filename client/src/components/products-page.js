import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/products';
import Product from './product';
import ProductsSearch from './products-search';

class ProductsPage extends Component {

  componentDidMount() {
    this.props.fetchAllProducts();
    window.scrollTo(0, 0);
  }

  renderProducts() {
    const { products } = this.props;
    if (products.length <= 0) {
      return <p>NO PRODUCTS</p>;
    }
    return <Product />
  }

  render() {
    return (
      <div className='container'>
        <h1>Products</h1>
        <ProductsSearch />
        <div className='row'>
          { this.renderProducts() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products }
}

export default connect(mapStateToProps, { fetchAllProducts })(ProductsPage);