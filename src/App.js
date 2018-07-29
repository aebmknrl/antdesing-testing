import React, { Component } from 'react';

import Login from './components/Login';
import Main from './components/Main';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
  }
  handleLoggedIn() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn && <Login onLoggedIn={this.handleLoggedIn} />}
        {this.state.isLoggedIn && <Main />}
      </div>
    );
  }
}

export default App;
