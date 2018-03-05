import React, { Component } from 'react'
import UserInput from "./pages/userAction/UserInput"
import Container from "./pages/container/Container"
import Header from "./pages/header/Header"

class Chatbot extends Component {
   constructor(props){
     super(props)
     this.state = {
       messages: []
     }
     this.update = this.update.bind(this)
     this.nextID = this.nextID.bind(this)
     // this.displayMessage = this.displayMessage.bind(this)
     // this.displayMessage = this.displayMessage.bind(this)
   }

   nextID(){
     this.uniqueID = this.uniqueID || 0
     return this.uniqueID++
   }

   update(newMessage){
     this.setState((prevState) => ({
       messages: [
         ...prevState.messages,
         {
           id: this.nextID(),
           message: newMessage
         }
       ]
     }))
   }

   displayMessage(messages, i){
     return(
        <p key={i}>{messages.message}</p>
     )
   }

  render() {
    return (
      <div>
        <Header className = "header" />
        <Container message={this.state.messages.map(this.displayMessage)} />
        <UserInput className = "userInput" update = {this.update}/>
      </div>

    );
  }
}

export default Chatbot;
