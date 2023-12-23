import "./index.css"

const TotalComponent=(props)=>{
    const {totalSum}=props;
    return (
        <div>
            <h1 className="total-count-heading">Total Count: <span className="total-counter">{totalSum}</span></h1>
        </div>
    )
}
export default TotalComponent