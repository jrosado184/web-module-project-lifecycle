import React from "react";
import User from "./components/User";
import axios from "axios";
import "./index.css";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    user: "jrosado184",
    followers: [],
    input: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.input}`)
      .then((res) => {
        this.setState({
          ...this.state,
          user: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        this.setState({
          ...this.state,
          user: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(`https://api.github.com/users/${this.state.user}/followers`)
      .then((res) => {
        this.setState({
          ...this.state,
          followers: res.data,
        });
      });
  }

  render() {
    return (
      <>
        <div className='main'>Github Card</div>
        <form className='form'>
          <input
            value={this.state.input}
            onChange={this.handleChange}
            type='text'
          />
          <button onClick={this.handleSearch}>Search</button>
        </form>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </>
    );
  }
}

export default App;
