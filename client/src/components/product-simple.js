import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import '../style/products.css';

const ProductSimple = props => {

    return _.map(props.products, product => {
      return (
        <Link to={`/product/${product.id}`} key={product.id} className='col-md-3 box-outer'>
          <div className='box-inner'>
            <h2 className='product-name'>{product.name}</h2>
            <div className='image-box'>
              <img src={product.picture} alt='' className='image-thumb' />
            </div>
            <p className='product-brand'>{product.brand}</p>
            <p className='product-category'>{product.category}</p>
          </div>
        </Link>
      )
    });
}

export default ProductSimple;