import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {

    if (localStorage.getItem('token') === null) {
      this.home()
    }
    else {
      this.panel()
    }

  }
  home = () => {
    this.props.history.push('./login');
  }
  panel = () => {
    this.props.history.push('./panel');
  }
  render() {

    return (
      <div>

      </div>
    );
  }
}

export default App;
