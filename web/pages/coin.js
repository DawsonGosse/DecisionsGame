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
        <BigGameLogo src="/coinflip.svg" bgcolor="#D3E1C5" ></BigGameLogo>
        <h2>Heads or Tails</h2>
        <p>Make a decision by playing heads or tails!</p>
      </GameTitle>
      <SliderCont>
        <Slider routeTo="/" back="lightgrey"></Slider>
        <Slider routeTo="/tictactoe" back="lightgrey"></Slider>
        <Slider routeTo="/coin" back="#D3E1C5"></Slider>
      </SliderCont>
        <Button routeTo="/coinflip" bgcolor="#D3E1C5" ></Button>
          <LeaderButton>
            <Button routeTo="/leaderboard" text="Leaderboard" bgcolor="rgba(211, 225, 197, 0.6)"></Button>
          </LeaderButton>
    </Container>
  )
}