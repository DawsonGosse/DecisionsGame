import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 217px;
    height: 57px;
    background-color: ${props=>props.bgcolor};
`

const TextCont = styled.div`
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
`

const Button = ({
    bgcolor='#58778A',
    text="Start Game"

}) => {
    return <Container bgcolor={bgcolor}>
        <TextCont>{text}</TextCont>
    </Container>
}

export default Button;