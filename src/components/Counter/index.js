import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import "./index.css"

const Counter=(props)=>{
    const {eachCounter,onIncrement,onDecrement}=props;
    const {id,value}=eachCounter;
    const valueColor=value>0?"green-col":""
    const valueColorRed=value<0?"red-col":""

    const incrementButton=()=>{
        onIncrement(id)
    }
    const decrementButton=()=>{
        onDecrement(id)
    }
    return (
        <div className="container-list-item">
            <h1 className="counter-heading">Counter {id}</h1>
            <p className={`counter-value ${valueColor} ${valueColorRed}`}>{value}</p>
            <div className="buttons-container">
                <button type="button" className="button btn-red" onClick={decrementButton}><FaMinus /></button>
                <button type="button" className="button" onClick={incrementButton}><FaPlus /></button>
        </div>
        </div>
    )
}

export default Counter