/* eslint-disable react/prop-types */
import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <>
        <div className='user-con'>
          <img className='user-img' src={this.props.user.avatar_url} />

          <div className='user-info'>
            <h1>{this.props.user.login}</h1>
            <p>Following: {this.props.user.following}</p>
            <p>Followers: {this.props.user.followers}</p>
          </div>
        </div>
      </>
    );
  }
}

export default User;
