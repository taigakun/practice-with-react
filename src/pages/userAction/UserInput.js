import React, { Component } from 'react'

class UserInput extends Component{
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    this.props.update(this._newText.value)
  }

  render(){
    return(
      <div className = {this.props.className}>
        <form>
          <input type="text" ref={input => this._newText = input} />
          <button onClick={this.onClick} id="send">send</button>
        </form>
      </div>
    )
  }
}

export default UserInput
