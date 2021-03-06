import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import Product from './product';
import '../style/products.css';

class ProductsList extends Component {

  componentDidMount() {
    this.props.fetchProducts();
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
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='section-title'>Discover the products</h3>
        </div>
        { this.renderProducts() }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { products: state.products }
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList);