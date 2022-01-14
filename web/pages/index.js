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


export default function Home() {
  return (
    <Container>
      <GameTitle>
        <BigGameLogo></BigGameLogo>
        <h2>Rock Paper Scissors</h2>
        <p>Make a decision by playing rock paper scissors!</p>
      </GameTitle>
      <SliderCont>
        <Slider routeTo="/"></Slider>
        <Slider routeTo="/tictactoe" back="lightgrey"></Slider>
        <Slider routeTo="/coin" back="lightgrey"></Slider>
      </SliderCont>
        <Button routeTo="/rpsgame"></Button>
          <LeaderButton>
            <Button routeTo="/leaderboard" text="Leaderboard" bgcolor="rgba(88, 119, 138, 0.54)"></Button>
          </LeaderButton>
    </Container>
  )
}
