import {Component} from "react"

import Counter from "./components/Counter"
import FourthCounter from "./components/FourthCounter"

import "./App.css"

const data = [
  { id: 1, 
    value: 0 },
  { id: 2,
     value: 0 },
  { id: 3, 
    value: 0 }
];

class App extends Component{

  state={
    CounterData:data,
  }

  onIncrement=(id)=>{
    this.setState((prevState)=>({
      CounterData:prevState.CounterData.map((eachCounterState)=>{
        if (eachCounterState.id===id){
          const updateCount=eachCounterState.value+1;
          return {...eachCounterState,value:updateCount}
        }
        return eachCounterState;
      })
    }))
  }

  onDecrement=(id)=>{
    this.setState((prevState)=>({
      CounterData:prevState.CounterData.map((eachCounterState)=>{
        if (eachCounterState.id===id){
          const updateCount=eachCounterState.value-1;
          return {...eachCounterState,value:updateCount}
        }
        return eachCounterState;
      })
    }))
  }

  render(){
    const {CounterData}=this.state
    let sumThree=0;
    for(let i of CounterData){
      sumThree=sumThree+i.value;
    }
    return (
      <div className="app-container">
      <div className="counter-container">
        {CounterData.map((eachCounter)=><Counter eachCounter={eachCounter} key={eachCounter.id} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />)}
      </div>
      <FourthCounter sumThree={sumThree} />
      </div>
    )
  }
}

export default App