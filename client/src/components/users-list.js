import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/front-page.css';
import { fetchUsers } from '../actions/users';
import '../style/users.css';

import User from './user';
import UsersSearch from './users-search';

class UsersList extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const { users } = this.props;
    if (users.length <= 0) {
      return <p>NO USERS</p>;
    }
    return <User users={this.props.users} />
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='section-title'>Discover the beauty</h3>
          <UsersSearch />
        </div>
          { this.renderUsers() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    currentUser: state.currentUser 

  }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);