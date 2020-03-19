import React from 'react';
import styled from 'styled-components'

const HeroContainer = styled.div`
position: relative;
width: 100%
`

const HeroImg = styled.img`
width: 100%;
`

const HeroText = styled.text`
position: absolute;
width: 468px;
height: 368px;
left: 64px;
top: 64px;

font-family: 'ChunkFive Roman';
font-style: normal;
font-weight: normal;
font-size: 62px;
line-height: 74px;
text-decoration-line: underline;
text-transform: uppercase;

color: #FFFFFF;
`

const heroheader = (props) => {
    const {img, text} = props
    return (
        <HeroContainer>
            <HeroImg src={img} alt="Bee"/>
            <HeroText>{text}</HeroText>
        </HeroContainer>
    );
};

export default heroheader;