import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    background-color: ${props=>props.back};
    border-radius: 50%;
`;


const Icon = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width:${props=>props.width};
`;

const Text = styled.p `
    font-size: 18px;
    font-weight: 400;
    color: ${props=>props.color};
    max-width: 150px;
    text-align: center;
`;


const CircleText = ({
    text="Rock",
    src="https://www.paradigm.com/2676-home_default/rock-monitor-60-sm.jpg",
    width="50px",
    color="grey",
    back="#58778A"
}) =>{
    
    return <Container>
        <Circle back={back}>
            <Icon src={src} width={width}/>
        </Circle>
        <Text color={color}>{text}</Text>
    </Container>
}

export default CircleText;