import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/users';
import ProductSimple from './product-simple';
import '../style/users.css';

class UserPage extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchUser(id);
  }

  renderProducts() {
    const products = this.props.user.products;
    if (products) {
      if (products.length <= 0) {
        return <p className='col-md-12'>THIS USER HAS NO PRODUCTS YET.</p>;
      }
      return <ProductSimple products={products} />
    }
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return <p>User does not exist...</p>;
    }

    return (
      <div className='container'>
        <div className='row user-page'>
          <div className='col-md-4'>
            <img src={user.picture} alt='' />
          </div>
          <div className='col-md-8'>
            <p className='user-details'>{user.name}</p>
            <p className='user-details'>{user.location}</p>
            <p>{user.about}</p>
            <p className='user-details'>Skin type: {user.skintype}</p>
            <p>Hair Type: {user.hairtype}</p>
            <p>Chemical Processes: {user.haircolor}</p>
          </div>
        </div>
        <div className='row'>
          <h3 className='section-title col-md-12'>Products {user.name} &#10084;</h3>
          { this.renderProducts() }
        </div>
      </div>
    );

  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.users[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchUser })(UserPage);
