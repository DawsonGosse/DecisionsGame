import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:274px;
height:274px;
background-color:${props=>props.bgcolor};
border-radius:150px;
`

const Image = styled.img`
display: flex;
width:${props=>props.width};
height:${props=>props.height};
align-items: center;
justify-content: center;
`;

const BigGameLogo = ({
bgcolor="#FAD",
img="https://www.paradigm.com/2676-home_default/rock-monitor-60-sm.jpg",

}) => {
    return (
    <div>
        <Circle bgcolor={bgcolor}>
        <Image width={width} height={height} src={src}></Image>
            </Circle>
    </div>

    )
}

export default BigGameLogo;