import React, { Component } from 'react';
import UsersList from './users-list';
import ProductsList from './products-list';
import { Link } from 'react-router-dom';

class FrontPage extends Component {

  render() {
    return (
      <div className='container'>
        <ProductsList />
        <Link to={'/products'} className='button'>See More Products</Link>
        <hr></hr>
        <UsersList />
        <Link to={'/users'} className='button'>See More Users</Link>
        <hr></hr>
      </div>
    );
  }

}

export default FrontPage;