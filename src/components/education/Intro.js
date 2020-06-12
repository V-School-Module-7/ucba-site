import React from "react"
import styled from "styled-components"
import {
    Container,
    GreenLineContainer,
    BoxTitle,
    HeaderParagraph,
}
    from "../../styles/edustyles.js"

const DContainer = styled(Container)`
    @media (max-width: 900) {
        padding-right: 14%;
    }

    @media (max-width: 500) {
        width: 80vw;
        margin: auto;
        padding: 0 15% 0 0 ;
    }

`

const BoxHeader = styled(BoxTitle)`
  font-size: 36;
  text-transform: uppercase;
`

const HeaderP = styled(HeaderParagraph)`
  line-height: 32px;
`

const Intro = () => {
    return (
    <DContainer id="intro">
        <GreenLineContainer>
            <BoxHeader>Intro</BoxHeader>
            <HeaderP>Listed below are diseases, pests, parasites and predators of honeybees in North America. Learn how to recognize their presence in the hive and the current recommended treatment/prevention. Use the key to the left to find specific information.</HeaderP>
        </GreenLineContainer>
    </DContainer>
    )
}

export default Intro