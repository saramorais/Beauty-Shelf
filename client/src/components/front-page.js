import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersList from './users-list';
import ProductsList from './products-list';

class FrontPage extends Component {

  render() {
    // REMOVE!!!
    console.log('all aplication state - ', this.props.user);

    return (
      <div className='container'>
        <ProductsList />
        <UsersList />
      </div>
    );
  }

}

// REMOVE!!!
function mapStateToProps(state) {
  return { user: state }
}

export default connect(mapStateToProps, {})(FrontPage);
// export default FrontPage;