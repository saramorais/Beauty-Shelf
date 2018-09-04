import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from './actions';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.loginLogout = this.loginLogout.bind(this);
    this.logout = this.logout.bind(this);
  }  

  logout() {
    this.props.userLogout();
  }

  loginLogout() {
    if (this.props.currentUser !== null) {
      return (
        <div className='col-md-6 account-buttons'>
          <Link to={`/user/${this.props.currentUser.id}`} className='account'>profile |</Link>
          <Link to='/account-edit' className='account'> edit |</Link>
          <Link to='/' onClick={this.logout} className='account'> logout</Link>
        </div>
      );
    }
    return (
      <div className='col-md-6 account-buttons'>
        <Link to='/signup' className='account'>signup |</Link>
        <Link to='/login' className='account'> login</Link>;
      </div>
    );
  }

  render() {
    return (
      <header>
        <div className='container-fluid header'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <Link to='/' className='site-logo'>beauty shelf</Link>
              </div>
              {this.loginLogout()}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps, { userLogout })(App);

