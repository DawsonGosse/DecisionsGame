import React from "react";
import styled from "styled-components";
const Square = ({label,i,j,setValue})=>{
    
    const Container = styled.div`        
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    `

    return(
        <Container>
            <div className="innerSquares" onClick={()=>setValue(i,j)}>
                <div className="placeholder">
                    {label}
                </div>
            </div>
        </Container>
    )
}

export default Square;