import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: true,}

  clicking=()=>{
      this.setState(prevState=>({
    mode:!prevState.mode}))   
      }
  
  render(){

   const {mode} =this.state
    const classname= mode?'LightMode':'DarkMode' 
    const text=mode?'Light Mode':'Dark Mode' 
    
    return (
      <div className={`container ${classname}`}>
        <h1>Click To Change Mode</h1>
        <button type="button" onClick={this.clicking}>{text}</button>
      </div>
    )
  }


export default LightDarkMode
