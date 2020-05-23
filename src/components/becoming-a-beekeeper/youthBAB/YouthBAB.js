import React from "react"
import styled from "styled-components"
import {
  ParagraphTextBottomMargin, FlexContainer
} from "../../../styles/babstyles.js"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: Work Sans;
    margin: 0 4% 4% 4%;

    @media (max-width: 900px) {
        width:100%;
      }
    
      @media (max-width: 550px) {
        max-width: 350px;
        width: 100%;
      }
    
      @media (max-width: 400px) {
        max-width: 350px;
        width: 100%;
       
      }
`

const TextContainer = styled.div`
  position: relative;
  height: auto;
  margin: 0 8%;
  margin-top: 64px;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 4%;
  margin-bottom: 2%;

  border: 6px solid #63966a;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    max-width: 350px;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
`

const Title = styled.h1`
  // display: flex;
  // justify-content: center;
  // margin: 30px;
  
`
const HeaderParagraph = styled.p`
// margin-bottom: 0;
`

const Email = styled.span`
  // font-weight: bold;
  // text-decoration: underline;
`

const BodyContainer = styled.div`
    // padding: 0 8%;

    @media (max-width: 900px) {
        width: 500px;
        font-size: 16px;
        padding: 0;
        margin: 2%;
      }
    
      @media (max-width: 550px) {
        width: 350px;
        font-size: 16px;
      }
    
      @media (max-width: 400px) {
          font-size: 16px;
          width: 100%;
        max-width: 300px;
        margin: 2%;

      }

`
const BeeHeader = styled.h1`
  // display: inline-block;
  // border-bottom: 6px solid #63966a;
  // padding: 16px 0 2px 0 ;
  // font-size: 24px;
  // line-height: 42px;
  // color: #000000;
  // margin-bottom: 2%;

  // @media (max-width: 900px) {
  //     font-size: 16px;
  // }
`


const Paragraph = styled.p`
//   font-size: 24px;
//   line-height: 28px;
//   margin-bottom: 2% 0 4% 0;

//   @media (max-width: 900px) {
//       width: 100%;
//       overflow-x:hidden;
//     font-size: 16px;
//     margin: 2px;
// }
`
const Subscript = styled.h3`
  //   margin: 2% 0;
  // font-weight: bold;
  // font-size: 24px;

  // @media (max-width: 550px) {
  //   font-size: 16px;
  // }
`
const ButtonContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-contents: center;
  // align-items: center;

`
const AppButton = styled.button`
  // background-color: #FFCB00;
  // font-family: Work Sans;
  // font-size: 24px;
  // font-weight: 700;
  // width: 569px;
  // height: 72px;
  // border: none;
  // box-shadow: 18px 22px #FFE994;
  // margin: 3% 0 5% 0;

  // @media (max-width: 900px) {
  //   width: 400px;
  //   font-size: 16px;
  // }

  // @media (max-width: 550px) {
  //   width: 300px;
  //   font-size: 16px;
  // }

  // @media (max-width: 400px) {
  //   width: 270px;
  //   box-shadow: none;
  //   font-size: 16px;
  // }
`

function YouthBAB() {
    return (
        <FlexContainer>
            <TextContainer>
                <Title>Youth Be A Beekeeper Program</Title>
                <HeaderParagraph>To be considered for BAB, an application will be filled out and an essay must be written based on the given topic. The essay will be judged based on a rubric. The application and essay must be emailed to <Email>ut.co.beekeepers@gmail.com</Email> before 11:59 p.m. on February 25, 2020. If you are selected as a finalist, you must be in attendance at the March 12th Utah County Beekeeping Association meeting.</HeaderParagraph>
            </TextContainer>
            <BodyContainer>
                <BeeHeader>Expectations</BeeHeader>
                <Paragraph>If selected, each participant will attend a minimum of 5 Utah County Beekeepers Association (UCBA) meetings; participate in UCBA for at least 2 years; supply 2 written reports or presentations of progress; email the BAB coordinator once a month; write and give thank you notes to BAB coordinator for sponsors no later than May 31, 2020; must participate in at least 2 speaking engagements; meet the financial obligation associated with the BAB program; and learn and have fun!</Paragraph>
                <BeeHeader>Cost to the BAB participant </BeeHeader>
                <Paragraph>There will be a $100 deposit. It will be returned by January 31, 2021 to those who fulfilled the expectations (see above) of BAB. Otherwise the deposit will be forfeited. Additionally there may be costs beyond the deposit that will be required from the winner. The association will cover many costs, but may not cover all of those associated with starting a hive.</Paragraph>
                <BeeHeader>Waiver</BeeHeader>
                <Paragraph>Each participant's parent or guardian (because the participant will be under legal age) will sign a waiver releasing UCBA and any mentors from any liability associated with owning and operating a hive while participating in the BAB program.</Paragraph>

                <BeeHeader>UCBA will provide:</BeeHeader>
                <Paragraph>A hive with frames and bees; beekeeping mentor; a hive tool; bee brush; smoker; gloves; veil; and a state beekeeping license.</Paragraph>

                <BeeHeader>Winners</BeeHeader>
                <Paragraph>For the 2020 year, we will have no more than 4 winners. </Paragraph>

                <BeeHeader>Essay for 12-14 Year-Olds</BeeHeader>
                <Paragraph>Write a 3-5 paragraph essay. Each paragraph should include 3 but no more than 5 sentences. Write an essay including the following elements. Tell about bees. Do you have any personal experience with them? Why are you interested in beekeeping? What would you like to learn as a beekeeper during the next two years? </Paragraph>

                <BeeHeader>Essay for 15-18 Year-Olds</BeeHeader>
                <Paragraph>Write a 4-7 paragraph essay. Each paragraph should include 4 but no more than 7 sentences. Write an essay including the following elements. Why are you interested in beekeeping? What knowledge or experience do you have with bees, if any? What specifically would you like to learn about bees and beekeeping during the next two years? </Paragraph>

                <Subscript>Good Luck! We look forward to receiving your entries!</Subscript>
                <ButtonContainer><AppButton>CLICK HERE TO FILL OUT AN APPLICATION</AppButton>
                </ButtonContainer>

            </BodyContainer>
        </FlexContainer>
    )
}
export default YouthBAB