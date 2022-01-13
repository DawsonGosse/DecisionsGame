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


export default function Home() {
  return (
    <Container>
      <GameTitle>
        <BigGameLogo></BigGameLogo>
        <h2>Rock Paper Scissors</h2>
        <p>Make a decision by playing rock paper scissors!</p>
      </GameTitle>
      <SliderCont>
        <Slider routeTo="/rpsgame"></Slider>
        <Slider routeTo="/rpsgame" back="lightgrey"></Slider>
        <Slider routeTo="/rpsgame" back="lightgrey"></Slider>
      </SliderCont>
        <Button routeTo="/rpsgame"></Button>
    </Container>
  )
}
