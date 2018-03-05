import React, {Component} from 'react'

class Container extends Component {
  render(){
    return(
      <div className = "container" >
        {this.props.message}
      </div>
    )
  }
}



export default Container
