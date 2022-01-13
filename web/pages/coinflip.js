import styled from 'styled-components';
import React, {useState} from 'react';
import CircleText from '../comps/CircleText';
import Button from '../comps/Button';


let p1Score = 0;
let p2Score = 0;

let userChoice = "null";
const Flip = function(){

    if (typeof window !== "undefined") {

        localStorage.setItem("P1CoinFlip", p1Score)
        localStorage.setItem("P2CoinFlip", p2Score)
        
    }

    let coin = Math.random();

        if (userChoice == "Heads") {
            if (coin <= 0.5) {
                console.log("Player 1 Wins!");
                p1Score++
                console.log(p1Score)
            }
            else {
                console.log ("Player 2 Wins!");
                p2Score++
                console.log(p2Score)
            }
        }
        if (userChoice == "Tails") {
            if (coin > 0.5) {
                console.log("Player 1 Wins!");
                p1Score++
                console.log(p1Score)
            }
            else {
                console.log("Player 2 Wins!");
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
        return <div>
            <div>
                <h1>Player one select your choice</h1>
                <button onClick={SelectHeads}>Heads</button>
                <button onClick={SelectTails}>Tails</button>
            </div>
    
        </div>
    }