import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 217px;
    height: 57px;
    background-color: ${props=>props.bgcolor};
    border-radius: 28.5px;
`

const TextCont = styled.div`
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
`

const Button = ({
    bgcolor='#58778A',
    text="Start Game",
    routeTo="/rpsgame",

}) => {

    const router = useRouter();

    return <Container bgcolor={bgcolor} onClick={()=>router.push(routeTo)}>
        <TextCont>{text}</TextCont>
    </Container>
}

export default Button;