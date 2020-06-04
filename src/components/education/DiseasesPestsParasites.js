import React from "react"
import styled from "styled-components"
import { Container, GreenLineContainer, BoxTitle, HeaderParagraph, BeeHeader, Paragraph } from "../../styles/edustyles.js"

const BoxHeader = styled(BoxTitle)`
    font-size: 36;
    text-transform: uppercase;
`

const HeaderP = styled(HeaderParagraph)`
    line-height: 32px;
`
const Header = styled.h1`
    display: flex;
    flex-direction: column;
   
    justify-content: center;
    align-items: center;
    // display: inline-block;
    text-transform: uppercase;
    margin-top: 5%;
    border-bottom: 6px solid #63966a;
`

const SubHeader = styled(BeeHeader)`
display: inline-block;
    font-size: 24px;
    line-height: 32px;
    text-decoration: none;
`

const DiseasesPestsParasites = () => {
  return (
    <Container>
      <GreenLineContainer>
        <BoxHeader>Intro</BoxHeader>
        <HeaderParagraph>Listed below are diseases, pests, parasites and predators of honeybees in North America. Learn how to recognize their presence in the hive and the current recommended treatment/prevention. Use the key to the left to find specific information.</HeaderParagraph>
      </GreenLineContainer>
      <Header>Nutrition Information</Header>
      <SubHeader>This is the subheader</SubHeader>
      <Paragraph>Generalized nutrition information for honey based upon a 1 tablespoon serving size and a 2,000 calorie diet.</Paragraph>
     
    </Container >
  )
}

export default DiseasesPestsParasites