import styled from 'styled-components';
import React, {useState} from 'react';
import CircleText from '../comps/CircleText';
import Button from '../comps/Button';

//Styling
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PlayerChoicesCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
`

//Leaderboard
if (typeof window !== "undefined") {
    localStorage.setItem("P1rockpapersissors", 10)
    localStorage.setItem("P2rockpapersissors", 8)
}

//Game
let user1Choice = 'null'
let user2Choice = 'null'

let Compare = function(choice1, choice2) {
    //Tie
    if(choice1 == choice2 & choice1 != 'null') {
        alert('tie')
    }

    //Player 1 Wins
    if (choice1 == 'paper' && choice2 == 'rock') {
        alert('player 1 wins')
    }
    if (choice1 == 'rock' && choice2 == 'scissors') {
        alert('player 1 wins')
    }
    if (choice1 == 'scissors' && choice2 == 'paper') {
        alert('player 1 wins')
    }

    //Player 2 Wins
    if (choice2 == 'paper' && choice1 == 'rock') {
        alert('player 2 wins')
    }
    if (choice2 == 'rock' && choice1 == 'scissors') {
        alert('player 2 wins')
    }
    if (choice2 == 'scissors' && choice1 == 'paper') {
        alert('player 2 wins')
    }
}   

export default function RPS() {
    //Player 1 Choices
    const SelectPaper1 = function(){
        user1Choice = "paper"
        console.log('paper1')
    } 
    const SelectRock1 = function(){
        user1Choice = "rock"
        console.log('rock1')
    } 
    const SelectScissor1 = function(){
        user1Choice = "scissors"
        console.log('scissor1')
    } 

    //Player 2 Choices
    const SelectPaper2 = function(){
        user2Choice = "paper"
        console.log('paper2')
    } 
    const SelectRock2 = function(){
        user2Choice = "rock"
        console.log('rock2')
    } 
    const SelectScissor2 = function(){
        user2Choice = "scissors"
        console.log('scissor2')
    } 
    
    //RPS Page
    return <Container>
        <h1>Choose One</h1>
        <h3>Player 1</h3>
        <PlayerChoicesCont>
            {/* Player 1 */}
            <button onClick={SelectRock1}>Rock</button>
            <button onClick={SelectPaper1}>Paper</button>
            <button onClick={SelectScissor1}>Scissors</button>
        </PlayerChoicesCont>  

        <h3>Player 2</h3>
        <PlayerChoicesCont>
            {/* Player 2 */}
            <button onClick={SelectRock2}>Rock</button>
            <button onClick={SelectPaper2}>Paper</button>
            <button onClick={SelectScissor2}>Scissors</button>
        </PlayerChoicesCont>  
  
        <Button text='Done' onClick={Compare (user1Choice, user2Choice)}></Button>
    </Container>
}