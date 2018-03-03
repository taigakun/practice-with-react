import React, { Component } from 'react'
import UserInput from "./pages/userAction/UserInput"
import Container from "./pages/container/Container"
import Header from "./pages/header/Header"

class Chatbot extends Component {
  render() {
    return (
      <div>
        <Header className = "header" />
        <Container className = "container" />
        <UserInput className = "userInput"/>
      </div>

    );
  }
}

export default Chatbot;
