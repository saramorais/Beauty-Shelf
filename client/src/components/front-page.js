import React, { Component } from 'react';
import UsersList from './users-list';
import ProductsList from './products-list';

class FrontPage extends Component {

  render() {
    return (
      <div className='container'>
        <ProductsList />
        <UsersList />
      </div>
    );
  }

}

export default FrontPage;