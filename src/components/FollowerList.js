/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Follower from "./Follower";

class FollowerList extends Component {
  render() {
    return (
      <div className='follower-con'>
        {this.props.followers.map((follower) => (
          <Follower follower={follower} />
        ))}
      </div>
    );
  }
}
export default FollowerList;
