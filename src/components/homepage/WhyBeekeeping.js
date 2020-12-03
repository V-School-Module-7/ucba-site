import React from "react"
import styled from "styled-components"
import {
    BeeHeader,
    Container,
    CenteringContainer,
    Paragraph,
    BeeButton
} from "../../styles/globalstyles.js"

import { Link } from "gatsby"


// import HomepageBackground from "../../images/HomepageBackground"
// import Africanbeemap from '../../images/Africanbeemap'
// import '../../images/Africanbeemap'

// const HomeContainer = styled(Container)`
//   background-image: src="../../images/Africanbeemap";
// `


const AppButton = styled(BeeButton)`
  background-color: #F5D75F;
  font-style: normal;
  line-height: 19px;
/* identical to box height */
  letter-spacing: -0.5px;
  
  @media (max-width: 900px) {
    box-shadow: 18px 22px #FCECAD;
  }
`

const AppLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: 72px;

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
          <CenteringContainer>
            <AppLink to="/becoming-a-beekeeper">
                <AppButton>
     
                  READ MORE
      
                </AppButton>
            </AppLink>
          </CenteringContainer>
        </CenteringContainer>
    </Container>

  )
}

export default WhyBeekeeping

/* Screen Shot 2020-01-10 at 3.19 1 */
