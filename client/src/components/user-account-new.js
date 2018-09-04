import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createUser, firstLogin } from '../actions';

class UserAccountNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstLogin = this.firstLogin.bind(this);

  }

  firstLogin(data) {
    this.props.firstLogin(this.state);
    this.props.history.push('/account-create');
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    /*CALL USER FIRST LOGIN ACTION*/
    this.props.createUser(this.state, this.firstLogin);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='form-container'>
            <form onSubmit={this.handleSubmit} className='form-group'>
              <h1>Create Account</h1>
              <div className='form-group'>
                <label>Email</label>
                <input name='email' type='email' onChange={this.handleChange} className="form-control" placeholder='' />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input name='password' type='password' onChange={this.handleChange} className="form-control" placeholder='' />
              </div>
              <button type='submit'className='form-submit'>CREATE ACCOUNT</button>
            </form>
          </div>
        </div>
        <hr />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state }
}

export default connect(mapStateToProps, { createUser, firstLogin })(UserAccountNew);
