import React from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    background-color: ${props=>props.back};
    border-radius: 50%;
`;



const Slider = ({
    back="#58778A",
    routeTo="/rpsgame",
}) =>{
    
    const router = useRouter();

    return <Container onClick={()=>router.push(routeTo)}>
        <Circle back={back}></Circle>
    </Container>
}

export default Slider;