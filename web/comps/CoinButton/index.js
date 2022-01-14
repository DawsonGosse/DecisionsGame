import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;

const Coinbutt = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 80px;
    width: 80px;
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


const CoinButton = ({
    text="Heads",
    src="/head.svg",
    width="50px",
    color="grey",
    onButtonClick=()=>{}
}) =>{
    
    return <Container onClick={()=>{onButtonClick()}}>
        <Coinbutt>
            <Icon src={src} width={width}/>
        </Coinbutt>
        <Text color={color}>{text}</Text>
    </Container>
}

export default CoinButton;