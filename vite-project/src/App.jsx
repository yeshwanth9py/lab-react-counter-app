import './App.css'
import {Component} from "react"

class App extends Component{

  constructor(){
    super()
    this.state = {
      counter: 0,
    }
  }


  increase=()=>{
    this.setState(()=>{
      return {
        counter: this.state.counter+1   
      }
    }) 
  }
  decrease=()=>{
    this.setState(()=>{
      return {
        counter: this.state.counter-1   
      }
    }) 
  }
  reset=()=>{
    this.setState(()=>{
      return {
        counter: 0  
      }
    }) 
  }


  render(){
    return (
      <div className='body'>
        <h1>Counter app</h1>

        {this.state.counter}
        <br/>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default App
