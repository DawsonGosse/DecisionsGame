import React from "react";
import styled from "styled-components";
const Square = ({label,i,j,setValue})=>{
    
    const Container = styled.div`        
        margin: ;
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