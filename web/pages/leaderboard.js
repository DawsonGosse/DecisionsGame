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

let Player1_Scores = {rockpapersissors:0,tictactoe:0,coinflip:0}
let Player2_Scores = {rockpapersissors:0,tictactoe:0,coinflip:0}

export default function Leaderboard() {

    return <Holder>
        <div className ="container1">
            <h1>Leaderboard</h1>
            <h3>PLAYER 1</h3>
            <div className ="container2">
            <CircleText text={Player1_Scores.rockpapersissors}></CircleText>
            <CircleText text={Player1_Scores.tictactoe} back='#85A9A1'></CircleText>
            <CircleText text={Player1_Scores.coinflip} back='#D3E1C5'></CircleText> 
            </div>  
            
            <h3>PLAYER 2</h3>
            <div className ="container2">
            <CircleText text={Player2_Scores.rockpapersissors}></CircleText>
            <CircleText text={Player2_Scores.tictactoe} back='#85A9A1'></CircleText>
            <CircleText text={Player2_Scores.coinflip} back='#D3E1C5'></CircleText> 
            </div>           
            <Button></Button>
        </div>

    </Holder>
}