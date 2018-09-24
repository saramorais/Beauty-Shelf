import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../actions/users';
import User from './user';
import UsersSearch from './users-search';

class UsersPage extends Component {

  componentDidMount() {
    this.props.fetchAllUsers();
    window.scrollTo(0, 0);
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
      <div className='container'>
        <h1>Users</h1>
        <h3>Search Users</h3>
        <UsersSearch />
        <div className='row'>
          { this.renderUsers() }
        </div>
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

export default connect(mapStateToProps, { fetchAllUsers })(UsersPage);