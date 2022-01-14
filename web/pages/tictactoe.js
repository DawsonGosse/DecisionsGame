import React from 'react';
import styled from 'styled-components';
import Button from '../comps/Button';
import BigGameLogo from '../comps/BigGameLogo';
import Slider from '../comps/Slider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SliderCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 100px 50px 60px 50px;
`
const GameTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`
const LeaderButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`

export default function Coin() {
  return (
    <Container>
      <GameTitle>
        <BigGameLogo src="/tictactoe.svg" bgcolor="#85A9A1" ></BigGameLogo>
        <h2>Tic Tac Toe</h2>
        <p>Make a decision by playing tic tac toe!</p>
      </GameTitle>
      <SliderCont>
        <Slider routeTo="/" back="lightgrey"></Slider>
        <Slider routeTo="/tictactoe" back="#85A9A1"></Slider>
        <Slider routeTo="/coin" back="lightgrey"></Slider>
      </SliderCont>
        <Button routeTo="/tictacgame" bgcolor="#85A9A1" ></Button>
          <LeaderButton>
            <Button routeTo="/leaderboard" text="Leaderboard" bgcolor="rgba(133, 169, 161, 0.5)"></Button>
          </LeaderButton>
    </Container>
  )
}