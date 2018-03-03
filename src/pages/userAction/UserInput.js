import React, { Component } from 'react'

class UserInput extends Component{
  render(){
    return(
      <div className = {this.props.className}>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" value={this.props.value} ref={input => this._newText = input} />
          <button onclick={this.props.onClick} id="send">send</button>
        </form>
      </div>
    )
  }
}

export default UserInput
