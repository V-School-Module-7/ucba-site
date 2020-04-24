import React from "react"
import styled from "styled-components"

import Coneimg from "../../images/homebeecones.png"
import HiveimgText from "../../images/hiveimgText.png"

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr auto;
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
  padding-bottom: 80px;

  @media (max-width: 800px) {
    display: block;
  }
`

const HiveImgContainer = styled.div`
  grid-column: 2/3;
  justify-self: center;
  font-family: Futura;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextHeader = styled.h1`
  height: 33px;
  margin: auto;
  display: inline-block;
  border-bottom: 6px solid #63966a;
  padding-bottom: 16px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  grid-column: 1 / 3;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-top: 40px;
  margin-bottom: 60px;

  @media (max-width: 500px){
    font-size: 24px;
  }
`

const ParagraphTextTwo = styled.div`
  grid-column: 0/1;
  grid-row: 2/3;
  font-family: Futura;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  width: 100%;
  height: auto;
  color: #000000;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextCone = styled.img`
  width: 80%;
`

const Conehiveimg = styled.img`
  width: 90%;
`

const WhyBeekeeping = () => {
  return (
    <HomeContainer>
      <TextHeader>WHY BEEKEEPING?</TextHeader>

      <ParagraphTextTwo>
        <TextCone src={HiveimgText}></TextCone>
      </ParagraphTextTwo>

      <HiveImgContainer>
        <Conehiveimg src={Coneimg}></Conehiveimg>
      </HiveImgContainer>
    </HomeContainer>
  )
}

export default WhyBeekeeping

/* Screen Shot 2020-01-10 at 3.19 1 */
