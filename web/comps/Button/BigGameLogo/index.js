import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
display:flex;
width:274px;
height:274px;
background-color:${props=>props.bgcolor};
border-radius:150px;
`

const BigGameLogo = ({
bgcolor="#FAD",
svg="",

}) => {
    return (
    <div>
        <Circle bgcolor="#58778A">
   
            </Circle>
    </div>

    )
}

export default BigGameLogo;