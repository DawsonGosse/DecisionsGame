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

    var P1RockPaperSissors = localStorage.getItem("P1rockpapersissors")
    var P2RockPaperSissors = localStorage.getItem("P2rockpapersissors")
    var P1CoinFlip = localStorage.getItem("P1CoinFlip")
    var P2CoinFlip = localStorage.getItem("P2CoinFlip")
    var P1TicTacToe= localStorage.getItem("P1TicTacToe")
    var P2TicTacToe = localStorage.getItem("P2TicTacToe")

    
}


let Player1_Scores = {rockpapersissors:0,tictactoe:0,coinflip:0}
let Player2_Scores = {rockpapersissors:0,tictactoe:0,coinflip:0}

Player1_Scores.rockpapersissors = P1RockPaperSissors
Player2_Scores.rockpapersissors = P2RockPaperSissors
Player1_Scores.coinflip = P1CoinFlip
Player2_Scores.coinflip = P2CoinFlip
Player1_Scores.tictactoe = P1TicTacToe
Player2_Scores.tictactoe = P2TicTacToe

Player1_Scores.Total = function(){ return this.rockpapersissors + this.tictactoe + this.coinflip}
console.log(Player1_Scores.Total())

Player2_Scores.Total = function(){ return this.rockpapersissors + this.tictactoe + this.coinflip}
console.log(Player2_Scores.Total())

const Overall = function(){
    if(Player1_Scores.Total() > Player2_Scores.Total())
    {
        console.log('Player 1 wins overall')
    }
    else if(Player1_Scores.Total() < Player2_Scores.Total())
    {
        console.log("Play 2 wins overall")
    }
    else
    {
        console.log("Its a tie!")
    }
}
Overall()

export default function Leaderboard() {

    return <Holder>
        <div className ="container1">
            <h1>Leaderboard</h1>
            <h3>PLAYER 1</h3>
            <div className ="container2">
            <CircleText text={Player1_Scores.rockpapersissors} src='/rps.svg'></CircleText>
            <CircleText text={Player1_Scores.tictactoe} back='#85A9A1' src='/tictactoe.svg'></CircleText>
            <CircleText text={Player1_Scores.coinflip} back='#D3E1C5' src='/coinflip.svg'></CircleText> 
            </div>  
            
            <h3>PLAYER 2</h3>
            <div className ="container2">
            <CircleText text={Player2_Scores.rockpapersissors}  src='/rps.svg'></CircleText>
            <CircleText text={Player2_Scores.tictactoe} back='#85A9A1'src='/tictactoe.svg'></CircleText>
            <CircleText text={Player2_Scores.coinflip} back='#D3E1C5' src='/coinflip.svg'></CircleText> 
            </div>           
            <Button routeTo="/" text="Back to Games"></Button>
        </div>

    </Holder>
}