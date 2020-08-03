import React from "react"
import styled from "styled-components"
import {
    BeeHeader,
    Container,
    CenteringContainer,
    Paragraph
} from "../../styles/edustyles.js"
import { Link } from "gatsby"

// import HomepageBackground from "../../images/HomepageBackground"

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`
const AppButton = styled.button`
  background-color: #F5D75F;
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 700;
  width: 569px;
  height: 72px;
  border: none;
  box-shadow: 8px 12px #FFE994;
  margin: 3% 0 5% 0;
  cursor: pointer;
  width: 147px;
// height: 55px;
// left: 643px;
font-family: Work Sans;
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 19px;
/* identical to box height */

letter-spacing: -0.5px;
  

  @media (max-width: 900px) {
    width: 400px;
    font-size: 16px;
    box-shadow: 18px 22px #FCECAD;
  }

  @media (max-width: 550px) {
    width: 300px;
    font-size: 16px;
    box-shadow: 12px 12px #FCECAD;
  }

  @media (max-width: 400px) {
    width: 270px;
    box-shadow: none;
    font-size: 16px;
  }
`

const AppLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: 72px;
  // width: 100%;
  // cursor: pointer;

   &:hover {
   color: red;
   }
`



const WhyBeekeeping = () => {
  return (

    <Container 
    >
        <CenteringContainer>
        <BeeHeader>Why Beekeeping?</BeeHeader>
            <Paragraph>Many different people keep bees for many different reasons, the most important one being pollination. Bee pollination is needed for the production of about one-third of our food crops.  Beekeepers also raise bees for their honey production and numerous hive by-products, including wax, royal jelly, pollen and, yes, even venom!</Paragraph>

            <Paragraph>Read more about being a beekeeper in our guide below!</Paragraph>
            <ButtonContainer>
  <AppLink to="/becoming-a-beekeeper">
    <AppButton>
     
        READ MORE
      
    </AppButton>
    </AppLink>
  </ButtonContainer>
        </CenteringContainer>
    </Container>

)
}

export default WhyBeekeeping

/* Screen Shot 2020-01-10 at 3.19 1 */
