import React from 'react';
import './App.css';
import logo from './logo.svg';

import axios from 'axios';
import Posts from "./components/Posts";
import Users from "./components/Users";

class App extends  React.Component{
  state = {
    posts: [],
    users: []
  };

  componentWillMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(posts => posts.data)
          .then(posts => {
              setTimeout(() => {
                this.setState({
                  posts
                })
              }, 1500)
          });
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(users => users.data)
          .then(users => {
              setTimeout(() => {
                  this.setState({
                      users
                  })
              }, 500)
          })
  }

  render() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <Users {...this.state} />
            <hr/>
            <Posts {...this.state}/>
        </div>
    );
  }
}

export default App;
