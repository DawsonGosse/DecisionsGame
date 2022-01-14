import React from "react";
import styled from "styled-components";


const Square = ({label,i,j,setValue})=>{    
    return(
    
        <div className="innerSquares" onClick={()=>setValue(i,j)}>
            <div className="placeholder">
                {label}
            </div>
        </div>
)
}

export default Square;