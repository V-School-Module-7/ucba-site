import React from "react"
import styled from "styled-components"
import {  Container, 
          GreenLineContainer, 
          CenteringContainer,
          BoxTitle, 
          BeeHeader, 
          HeaderParagraph, 
          Paragraph
          } from "../../../styles/globalstyles.js"


const Email = styled.span`
  font-weight: bold;
  text-decoration: underline;
`

const Subscript = styled.h3`
  margin: 4% 0;
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 550px) {
    font-size: 16px;
  }
`

const AppButton = styled.button`
  background-color: #FFCB00;
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 700;
  width: 569px;
  height: 72px;
  border: none;
  box-shadow: 18px 22px #FFE994;
  margin: 3% 0 5% 0;
  cursor: pointer;
  :hover {
    box-shadow: 8px 12px #FFE994;
  }

  @media (max-width: 900px) {
    width: 400px;
    font-size: 16px;
    box-shadow: 18px 22px #FFE994;
  }

  @media (max-width: 550px) {
    width: 300px;
    font-size: 16px;
    box-shadow: 12px 12px #FFE994;
  }

  @media (max-width: 400px) {
    width: 270px;
    box-shadow: none;
    font-size: 16px;
  }
`

function YouthBAB() {
  return (
    <Container>
      <GreenLineContainer>
        <CenteringContainer>
          <BoxTitle>Youth Be A Beekeeper Program</BoxTitle>
        </CenteringContainer>

        <HeaderParagraph>To be considered for BAB, an application will be filled out and an essay must be written based on the given topic. The essay will be judged based on a rubric. The application and essay must be emailed to <Email>ut.co.beekeepers@gmail.com</Email> before 11:59 p.m. the last Tuesday in February. If you are selected as a finalist, you must be in attendance at the March Utah County Beekeeping Association meeting.</HeaderParagraph>
      </GreenLineContainer>
      
      <BeeHeader>Expectations</BeeHeader>
      <Paragraph>If selected, each participant will attend a minimum of five Utah County Beekeepers Association (UCBA) meetings; participate in UCBA for at least two years; supply two written reports or presentations of progress; email the BAB coordinator once a month; write and give thank you notes to BAB coordinator for sponsors no later than May 31; must participate in at least two speaking engagements; meet the financial obligation associated with the BAB program; and learn and have fun!</Paragraph>
      <BeeHeader>Cost to the BAB participant </BeeHeader>
      <Paragraph>There will be a $100 deposit. It will be returned by January 31 of the following year to those who fulfilled the expectations (see above) of BAB. Otherwise the deposit will be forfeited. Additionally there may be costs beyond the deposit that will be required from the winner. The association will cover many costs, but may not cover all of those associated with starting a hive.</Paragraph>
      <BeeHeader>Waiver</BeeHeader>
      <Paragraph>Each participant's parent or guardian (because the participant will be under legal age) will sign a waiver releasing UCBA and any mentors from any liability associated with owning and operating a hive while participating in the BAB program.</Paragraph>

      <BeeHeader>UCBA will provide:</BeeHeader>
      <Paragraph>A hive with frames and bees; beekeeping mentor; a hive tool; bee brush; smoker; gloves; veil; and a state beekeeping license.</Paragraph>

      <BeeHeader>Winners</BeeHeader>
      <Paragraph>Each year, we will have no more than four winners. </Paragraph>

      <BeeHeader>Essay for 12-14 Year-Olds</BeeHeader>
      <Paragraph>Write a 3-5 paragraph essay. Each paragraph should include three but no more than five sentences. Write an essay including the following elements. Tell about bees. Do you have any personal experience with them? Why are you interested in beekeeping? What would you like to learn as a beekeeper during the next two years? </Paragraph>

      <BeeHeader>Essay for 15-18 Year-Olds</BeeHeader>
      <Paragraph>Write a 4-7 paragraph essay. Each paragraph should include four but no more than seven sentences. Write an essay including the following elements. Why are you interested in beekeeping? What knowledge or experience do you have with bees, if any? What specifically would you like to learn about bees and beekeeping during the next two years? </Paragraph>

      <Subscript>Good Luck! We look forward to receiving your entries!</Subscript>

      <CenteringContainer>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRW_Rwuh7syyTi1DX76145y-xpVJlLARRPJtbUsK68BqdDnA/viewform" target="_blank" rel="noopener noreferrer">
          <AppButton>CLICK HERE TO FILL OUT AN APPLICATION</AppButton>
        </a>
      </CenteringContainer>

    </Container>
  )
}
export default YouthBAB