import styled from 'styled-components';
import React from 'react';
import Button from '../comps/Button';
import CoinButton from '../comps/CoinButton';

const Container  = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

const Buttons  = styled.div `
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
`;

const LeaderButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

let p1Score = 0;
let p2Score = 0;

let userChoice = "null";
const Flip = function(){

    if (typeof window !== "undefined") {

        localStorage.setItem("P1CoinFlip", p1Score)
        localStorage.setItem("P2CoinFlip", p2Score)
        
    }

    let coin = Math.random();
    console.log(coin)

        if (userChoice == "Heads") {
            if (coin <= 0.5) {
                console.log("Player 1 Wins!");
                alert("Player 1 Wins!")
                p1Score++
                console.log(p1Score)
            }
            else if(coin > 0.5){
                console.log ("Player 2 Wins!");
                alert("Player 2 Wins!")
                p2Score++
                console.log(p2Score)
            }
        }
        if (userChoice == "Tails") {
            if (coin <= 0.5) {
                console.log("Player 1 Wins!");
                alert("Player 1 Wins!")
                p1Score++
                console.log(p1Score)
            }
            else if(coin > 0.5) {
                console.log("Player 2 Wins!");
                alert("Player 2 Wins!")
                p2Score++
                console.log(p2Score)
            }
        }

    }

export default function CoinFlip() {
        
        const SelectHeads = function(){
            userChoice = "Heads"
            Flip()
        }
        const SelectTails = function(){
            userChoice = "Tails"
            Flip()
        }
        return <Container>

            <Title>
                <h1>PLAYER 1</h1>
                <h3>Pick One</h3>
            </Title>

            <Buttons>
                <CoinButton onButtonClick={SelectHeads}></CoinButton>
                <CoinButton onButtonClick={SelectTails} src="tails.svg" text="Tails"></CoinButton>
            </Buttons>

            <Button routeTo="/" text='Done'bgcolor="#D3E1C5"></Button>
            <LeaderButton>
                <Button routeTo="/leaderboard" text="Leaderboard" bgcolor="rgba(211, 225, 197, 0.6)"></Button>
            </LeaderButton>

        </Container>
    }