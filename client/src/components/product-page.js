import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/products';
import { userAddProduct } from '../actions/users';

import UserSimple from './user-simple';
import '../style/products.css';

class ProductPage extends Component {

  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.fetchProduct(productId);
  }

  renderUsers() {
    const users = this.props.product.users;
    if (users) {
      if (users.length <= 0) {
        return <p className='col-md-12'>NO USERS TO THIS PRODUCT. ADD TO YOU LIST.</p>;
      }
      return <UserSimple users={users} />
    }
  }

  addProduct(productId) {
    const { currentUser } = this.props;
    currentUser ? this.props.userAddProduct(currentUser.id, productId) : alert('Please login!');
  }

  render() {
    const { product } = this.props;
    
    if (!product) {
      return <p>...</p>;
    }

    return (
      <div className='container'>
        <div className='row product-page'>
          <div className='col-md-4'>
            <img src={product.picture} alt='' />
          </div>
          <div className='col-md-8'>
            <p className='product-details'>{product.name}</p>
            <p className='product-details'>{product.brand}</p>
            <p className='product-details'>{product.description}</p>
            <button onClick={ () => this.addProduct(product.id) } className='add-product'>&#10084;PRODUCT</button>
          </div>
        </div>
        <div className='row'>
          <h3 className='section-title col-md-12'>Users that &#10084; {product.name}</h3>
          { this.renderUsers() }
        </div>
       </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    product: state.products[ownProps.match.params.id],
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchProduct, userAddProduct })(ProductPage);
