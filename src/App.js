import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { sendMessage } from './api';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleSetMessage = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(this.state.message, new Date());
  }
  
  render() {
    return (
      <div className="App">
        <label htmlFor="">Message</label>
        <input value={this.state.message} onChange={this.handleSetMessage} type="text" name="" id="" />
        <button onClick={this.handleSendMessage}>Enter</button>
      </div>
    );
  }
}

export default App;
