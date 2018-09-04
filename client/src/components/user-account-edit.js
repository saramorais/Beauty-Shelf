/* edit account for existig user */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editUser } from '../actions';

class UserAccountEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      about: this.props.user.about,
      picture: this.props.user.picture,
      name: this.props.user.name,
      location: this.props.user.location,
      website: this.props.user.website,
      hairtype: this.props.user.hairtype,
      skintype: this.props.user.skintype,
      hairstatus: this.props.user.hairstatus
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderUserAccount = this.renderUserAccount.bind(this);
  }

  renderUserAccount() { 
    this.props.history.push(`/user/${this.props.user.id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.setState({ [e.target.name]: '' });
    if (this.props.user) {
      this.props.editUser(this.state, this.props.user.id, this.renderUserAccount);
    }
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
              <h1>Edit Account Details</h1>
              <div className='form-group'>
                <label>Name</label>
                <input name='name' type='text' onChange={this.handleChange} className="form-control" placeholder={this.state.name} />
              </div>
              <div className='form-group'>
                <label>About</label>
                <input name='about' type='text' onChange={this.handleChange} className="form-control" placeholder={this.state.about} />
              </div>
              <div className='form-group'>
                <label>Location</label>
                <input name='location' type='text' onChange={this.handleChange} className="form-control" placeholder={this.state.location} />
              </div>
              <div className='form-group'>
                <label>Picture URL</label>
                <input name='picture' type='text' onChange={this.handleChange} className="form-control" placeholder={this.state.picture} />
              </div>
              <div className='form-group'>
                <label>Website</label>
                <input name='website' type='text' onChange={this.handleChange} className="form-control" placeholder={this.state.website} />
              </div>
              <div className='form-group'>
                <label>Hair Type</label>
                <input name='hairtype' type='text' onChange={this.handleChange} className="form-control" placeholder={this.state.hairtype} />
              </div>
              <div className='form-group'>
                <label>Hair Treatments</label>
                <input name='hairstatus' type='text' onChange={this.handleChange} className="form-control" placeholder={this.state.hairstatus} />
              </div>
              <div className='form-group'>
                <label>Skin Type</label>
                <input name='skintype' type='text' onChange={this.handleChange} className="form-control" placeholder={this.state.skintype} />
              </div>
              <button type='submit'className='button-grey'>Save</button>
            </form>
          </div>
        </div>
        <hr />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.currentUser }
}

export default connect(mapStateToProps, { editUser })(UserAccountEdit);
