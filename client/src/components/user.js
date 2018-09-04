import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const User = props => {

    return _.map(props.users, user => {

      const productLoves = user.products.length > 1 ? 'products' : 'product';

      return (
        <Link to={`/user/${user.id}`} key={user.id} className='col-md-3 box-outer'>
          <div className='box-inner'>
            <h2 className='user-name'>{user.name}</h2>
            <div className='image-box'>
              <img src={user.picture} alt='' className='image-thumb' />
            </div>
            <p className='user-type'>{user.skintype} Skin</p>
            <p className='user-type'>{user.hairtype} & {user.hairstatus} Hair</p>
            <p className='user-type'>&#10084;{user.products.length} {productLoves}</p>
          </div>
        </Link>
      )
    });
}

export default User;