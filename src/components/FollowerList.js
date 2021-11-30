/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Follower from "./Follower";

class FollowerList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.followers.map((follower) => (
          <Follower />
        ))}
      </div>
    );
  }
}
export default FollowerList;
