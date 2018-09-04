import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { userAddProduct } from '../actions';

class Product extends Component {

  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(productId) {
    const { currentUser } = this.props;
    currentUser ? this.props.userAddProduct(currentUser.id, productId) : alert('Please login!');
  }

  render() {
    const { products } = this.props;

    return _.map(products, product => {
      return (
        <div key={product.id} className='col-md-3 box-outer'>
          <div className='box-inner'>
            <Link to={`/product/${product.id}`}>
              <h2 className='product-name'>{product.name}</h2>
              <div className='image-box'>
                <img src={product.picture} alt='' className='image-thumb' />
              </div>
              <p className='product-brand'>{product.brand}</p>
            </Link>
            <hr></hr>
            <div className='row'>
              <div className='col-md-6'>
                <p className='product-category'>{product.category}</p>
              </div>
              <div className='col-md-6'>
                <button onClick={ () => this.addProduct(product.id) } className='add-product'>&#10084;PRODUCT</button>
              </div>
            </div>
          </div>
        </div>
      )
    });
  }
  
}

function mapStateToProps(state) {
  return { 
    products: state.products,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { userAddProduct })(Product);