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

export default function Leaderboard() {

    return <Holder>
        <div className ="container1">
            <h1>Leaderboard</h1>
            <h3>PLAYER 1</h3>
            <div className ="container2">
            <CircleText></CircleText>
            <CircleText text='Paper' back='#85A9A1'></CircleText>
            <CircleText text='Scissors' back='#D3E1C5'></CircleText> 
            </div>  
            
            <h3>PLAYER 2</h3>
            <div className ="container2">
            <CircleText></CircleText>
            <CircleText text='Paper' back='#85A9A1'></CircleText>
            <CircleText text='Scissors' back='#D3E1C5'></CircleText> 
            </div>           
            <Button></Button>
        </div>

    </Holder>
}