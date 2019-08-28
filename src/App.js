import React, { Component } from "react";
import Axios from "axios";
import User from "./Components/User";
import "./Components/myStyles.css";
import "./App.css";

class App extends Component {
  state = { person: [], count: 0 };
  users = [];
  componentDidMount = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.users = res.data;
      this.setState({ person: this.users[this.state.count] });
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
    });
  };
  handleChangeUser = () => {
    if (this.state.count < this.users.length) {
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
        person: this.users[this.state.count]
      });
    } else {
      this.setState({ count: 0 }, () => this.handleChangeUser());
    }
  };
  render() {
    return (
      <div className="App">
        <h1 className="primary">Axios-Thung</h1>

        <User pers={this.state.person} />
        <button onClick={this.handleChangeUser}>Next User</button>
      </div>
    );
  }
}

export default App;
