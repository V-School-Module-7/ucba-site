import React from 'react';
import styled from 'styled-components'

const HeroContainer = styled.div`
width: 100%
`

const HeroImg = styled.img`
width: 100%;
/* position: relative;
z-index: 0 */

`

const HeroText = styled.text`
position: absolute;
z-index: 10;
margin-top: 1000px;
font-size: 100px;
color: black
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