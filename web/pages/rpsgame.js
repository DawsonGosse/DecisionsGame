import styled from 'styled-components';
import React from 'react';
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

const LeaderButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`

//Game
let user1Choice = 'null'
let user2Choice = 'null'

//Leaderboard
let p1Score = 0
let p2Score = 0

function Compare(choice1, choice2) {
    //Leaderboard
    if (typeof window !== "undefined") {
        localStorage.setItem("P1rockpapersissors", p1Score)
        localStorage.setItem("P2rockpapersissors", p2Score)
    }

    //Tie
    if(choice1 == choice2 & choice1 != 'null') {
        console.log('tie')
        alert('tie')
    }

    //Player 1 Wins
    if (choice1 == 'paper' && choice2 == 'rock') {
        console.log('player 1 wins')
        alert('player 1 wins')
        p1Score++
        console.log(p1Score)
    }
    if (choice1 == 'rock' && choice2 == 'scissors') {
        console.log('player 1 wins')
        alert('player 1 wins')
        p1Score++
        console.log(p1Score)
    }
    if (choice1 == 'scissors' && choice2 == 'paper') {
        alert('player 1 wins')
        p1Score++
        console.log(p1Score)
    }

    //Player 2 Wins
    if (choice2 == 'paper' && choice1 == 'rock') {
        console.log('player 2 wins')
        alert('player 2 wins')
        p2Score++
        console.log(p2Score)
    }
    if (choice2 == 'rock' && choice1 == 'scissors') {
        console.log('player 2 wins')
        alert('player 2 wins')
        p2Score++
        console.log(p2Score)
    }
    if (choice2 == 'scissors' && choice1 == 'paper') {
        console.log('player 2 wins')
        alert('player 2 wins')
        p2Score++
        console.log(p2Score)
    }
}   

function Results() {
    Compare(user1Choice, user2Choice)
    user1Choice = "null"
    user2Choice = "null"

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
  
        <Button text='Results' onSubmit={Results()}></Button>

        <LeaderButton>
            <Button routeTo="/leaderboard" text="Leaderboard" bgcolor="rgba(88, 119, 138, 0.54)"></Button>
        </LeaderButton>
    </Container>
}