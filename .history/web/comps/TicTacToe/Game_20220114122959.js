import { useState } from "react"
import styled from "styled-components"
import Square from "./Square"
import Button from "../Button"

// Grid/Playing Field
const INITIAL_GRID = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-'],
]

// Page Layout
const Container = styled.div`
    display:flex;
    margin-top: 5%;
`

const buttonContainer = styled.div`
    height
`


//Setup for turns and ending games
const Game = props=>{
    const [grid, setGrid] = useState(INITIAL_GRID)
    const [turn, setTurn] = useState(Math.random()>0.5?
    false:true);
    const [gameEnd, setGameEnd] = useState(false);
    const [gameWinner, setGameWinner] = useState(null);
    /* 
    turn = false => player1 (o)
    turn = true =< player2 (x)
    */


// See if lines has 3 in a row
    const checkLines = (newGrid)=>{
        for(let i=0; i<3; i++){
        let o = 0;
        let x = 0;
            for(let j=0; j<3; j++){
                if(newGrid[i][j] === 'X') x++
                if(newGrid[i][j] === 'O') o++;
            }
            if (x === 3){
              return 'X';
            }
            else if(o === 3){
               return 'O';
            }
        }
        return null;
    }

    // See if columns has 3 in a row
    const checkColumns = (newGrid)=>{
        for(let i=0; i<3; i++){
        let x = 0;
        let o = 0;
            for(let j=0; j<3; j++){
                if(newGrid[j][i] === 'X') x++
                else if(newGrid[j][i] === 'O') o++;
            }
            if (x === 3){
              return 'X';
            }
            if(o === 3){
               return 'O';
            }
        }
        return null;
    }

    // See if both directions of diagonal lines have 3 in a row
    const checkDiagonals = (newGrid)=>{
        // First diagonal
        let x = 0;
        let o = 0;
        for(let i=0; i<3; i++){
            if(newGrid[i][i] === 'X') x++
            if(newGrid[i][i] === 'O') o++;
        }
        if ( x === 3) return 'X'
        else if( o === 3) return 'O';
        // Second diagonal
        x,o = 0;
        for(let i=0; i<3; i++){
            if(newGrid[i][2-i] === 'X') x++
            if(newGrid[i][2-i] === 'O') o++;
        }
        if (x === 3) return 'X';
        else if(o === 3) return 'O';

        return null;
        
    }


    const setValue = (i,j) =>{
        const newGrid = [...grid];
        if(newGrid[i][j]!='-') return;
        newGrid[i][j] = !turn?'O':'X';
        setGrid(newGrid)
        setTurn(!turn)
        
        /* 
        Who is the winner?
        */
       
       let winner = null;
       winner = checkLines(newGrid);
       console.log(checkLines(newGrid), checkColumns(newGrid)
       ,checkDiagonals(newGrid))
       if(winner === null)  winner = checkColumns(newGrid);
       if(winner === null)  winner = checkDiagonals(newGrid);
       
       if(winner){
           setGameEnd(true);
           setGameWinner(winner)
           setGrid(INITIAL_GRID);
        }
    }



    return( 
        <>
        {
            gameEnd?(
                <div>
                    the {gameWinner==='X'?'Player 1 (X)':'Player 2 (O)'} Won The Game!                    
                    </div>
            ):(
                <div>
                    {!turn?"Player 1 (O) :":"Player 2 (X)"}
                </div>
            )
        }
        <Container>
            <div className="square">
                    {
                        grid.map((gLine, i)=>{
                            return(
                                gLine.map((el,j)=>{
                                    return(
                                        <Square
                                        label = {el}
                                        i={i}
                                        j={j}
                                        setValue={setValue}
                                        />
                                    )
                                })
                            )
                        })
                    }
                    <buttonContainer>
                        <Button text="Main Menu" routeTo="/"></Button>
                        <Button text="Leaderboards" routeTo="/leaderboard"></Button>
                        <br></br>
                    </buttonContainer>     
            </div>
            </Container>
        </> 
    )
}

export default Game;