/* eslint-disable react/prop-types */
import React, { Component } from "react";

class Follower extends Component {
  render() {
    return (
      <>
        <div>
          <img className='follower-img' src={this.props.follower.avatar_url} />
          <h1 className='follower-name'>{this.props.follower.login}</h1>
        </div>
      </>
    );
  }
}
export default Follower;
