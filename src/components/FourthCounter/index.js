import { useState } from "react"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import TotalComponent from "../TotalComponent";
import "./index.css"


const FourthCounter=(props)=>{
    const [FourthValue,setValue]=useState(0);
    const {sumThree}=props;
    const totalSum=sumThree+FourthValue;
    const valueColor=FourthValue>0?"green-col":""
    const valueColorRed=FourthValue<0?"red-col":""
    return (
        <div className="fourth-main-counter">
        <div className="fourth-container">
            <h1 className="fourth-counter-heading">Counter 4</h1>
            <p className={`counter-value ${valueColor} ${valueColorRed}`}>{FourthValue}</p>
            <div className="fourth-buttons-container">
                <button type="button" className="button btn-red" onClick={()=>setValue(FourthValue-1)}><FaMinus /></button>
                <button type="button" className="button" onClick={()=>setValue(FourthValue+1)}><FaPlus /></button>
        </div>
        </div>
        <TotalComponent totalSum={totalSum} />
        </div>
    )
}

export default FourthCounter