import styled from 'styled-components';
import React, {useState} from 'react';
import CircleText from '../comps/CircleText';
import Button from '../comps/Button';

const Holder = styled.div `
.container1 {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
};
.container2 {
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
};
`;

if (typeof window !== "undefined") {

    localStorage.setItem("P1rockpapersissors", 10)
    localStorage.setItem("P2rockpapersissors", 8)
    
}


export default function RPS() {

    return <Holder>
        <div className ="container1">
            <h1>PLAYER 1</h1>
            <h3>Pick One</h3>
            <div className ="container2">
            <CircleText></CircleText>
            <CircleText text='Paper' back='#85A9A1'></CircleText>
            <CircleText text='Scissors' back='#D3E1C5'></CircleText> 
            </div>  
              
            <Button text='Done'></Button>
        </div>

    </Holder>
}