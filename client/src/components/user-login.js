import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class UserLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.accountPage = this.accountPage.bind(this);
  }

  accountPage(user) {
    // console.log('accountPage', user.id);
    this.props.history.push(`/user/${user.id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.userLogin(this.state, this.accountPage);
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
              <h1>User Login</h1>
              <div className='form-group'>
                <label>Email</label>
                <input name='email' type='email' onChange={this.handleChange} className="form-control" placeholder='' />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input name='password' type='password' onChange={this.handleChange} className="form-control" placeholder='' />
              </div>
              <button type='submit'className='form-submit'>LOGIN</button>
            </form>
          </div>
        </div>
        <hr />

      </div>
    );
  }
}

export default connect(null, { userLogin })(UserLogin);
