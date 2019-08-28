import React, { Component } from "react";
import Axios from "axios";
import User from "./Components/User";
import "./Components/myStyles.css";
import "./App.css";

class App extends Component {
  state = {
    person: {
      name: "",
      username: "",
      email: ""
    },
    count: 0
  };
  users = [];
  componentDidMount = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.users = res.data;
      this.setState({
        person: {
          name: this.users[this.state.count].name,
          username: this.users[this.state.count].username,
          email: this.users[this.state.count].email
        }
      });
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
    });
  };
  handleChangeUser = () => {
    if (this.state.count < this.users.length) {
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
        person: {
          name: this.users[this.state.count].name,
          username: this.users[this.state.count].username,
          email: this.users[this.state.count].email
        }
      });
    } else {
      this.setState({ count: 0 }, () => this.handleChangeUser());
    }
  };
  onNameChangeHandler = e => {
    console.log(e.which);
    this.setState({
      person: {
        name: e.target.value,
        username: this.users[this.state.count].username,
        email: this.users[this.state.count].email
      }
    });
    if (e.keyCode === 13) {
      console.log(this.state.person);
      return (this.users = [...this.users, this.state.person]);
    }
  };
  render() {
    return (
      <div className="App">
        <h1 className="primary">Axios-Thung</h1>

        <User pers={this.state.person} onChnge={this.onNameChangeHandler} />
        <button onClick={this.handleChangeUser}>Next User</button>
      </div>
    );
  }
}

export default App;
