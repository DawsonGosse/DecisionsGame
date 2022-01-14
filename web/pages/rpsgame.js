import styled from 'styled-components';
import React, {useState} from 'react';
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

const ChoiceButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    background-color: #58778A;
    border-radius: 50%;
    border: none;
    margin: 10px;
`

const ButtonIcon = styled.img`
    height: 50px;
`

//Leaderboard
if (typeof window !== "undefined") {
    localStorage.setItem("P1rockpapersissors", 10)
    localStorage.setItem("P2rockpapersissors", 8)
}

//Game
let user1Choice = 'null'
let user2Choice = 'null'

function Compare(choice1, choice2) {
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
        return false
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
            <ChoiceButton onClick={SelectRock1}><ButtonIcon src="/rock.svg"/></ChoiceButton>
            <ChoiceButton onClick={SelectPaper1}><ButtonIcon src="/paper.svg"/></ChoiceButton>
            <ChoiceButton onClick={SelectScissor1}><ButtonIcon src="/scissors.svg"/></ChoiceButton>
        </PlayerChoicesCont>  

        <h3>Player 2</h3>
        <PlayerChoicesCont>
            {/* Player 2 */}
            <ChoiceButton onClick={SelectRock2}><ButtonIcon src="/rock.svg"/></ChoiceButton>
            <ChoiceButton onClick={SelectPaper2}><ButtonIcon src="/paper.svg"/></ChoiceButton>
            <ChoiceButton onClick={SelectScissor2}><ButtonIcon src="/scissors.svg"/></ChoiceButton>
        </PlayerChoicesCont>  
  
        <Button text='Done' onSubmit={Compare (user1Choice, user2Choice)}></Button>
    </Container>
}