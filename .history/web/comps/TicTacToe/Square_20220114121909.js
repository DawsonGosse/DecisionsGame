const Square = ({label,i,j,setValue})=>{
    return(
        <div className="innerSquares" padding-top onClick={()=>setValue(i,j)}>
            <div className="placeholder">
                {label}
            </div>
        </div>
    )
}

export default Square;