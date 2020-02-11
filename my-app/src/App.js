import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./component/UserCard";
import FollowersCard from "./component/FollowersCard";

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/blakelower`)
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(res.data);
      })
      .catch(error => console.log(error));
    axios
      .get(` https://api.github.com/users/blakelower/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <h1>User card</h1>
        <UserCard user={this.state.user} />
        <FollowersCard followers={this.state.followers} />
      </div>
    );
  }
}
export default App;
