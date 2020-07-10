import React from "react"
import styled from "styled-components"
// import {
//   ParagraphTextBottomMargin,
// } from "../../styles/babstyles.js"

const TextContainer = styled.div`
  position: relative;
  width: 80vw;
  height: auto;
  margin: auto;
  margin-top: 64px;
  margin-bottom: 152px;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 5%;

  border: 6px solid #63966a;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 300px;
    padding-left: 8px;
    padding-right: 8px;
  }
`
const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 30px;
`
const Paragraph = styled.p`
margin-bottom: 48px;
`

const LicenseLink = styled.a`
  width: 50%;
  word-wrap: break-word;

`

function AboutPage() {
    return (
        <TextContainer>
            <Title>About UCBA</Title>
            <Paragraph>
                The UCBA welcomes all interested persons. We embrace a diversity of opinion and believe that there
                are many ways to successfully keep bees and produce honey. We encourage member participation in discussions during meetings and invite anyone to suggest or give a presentation at one of our meetings; this will help the UCBA meet its mission statement.
            </Paragraph>
            <Paragraph>
                Our Mission
                rovide a forum in which local beekeepers can share ideas, discuss the culture, explore methodologies, and support one another.
                provide education to the general public about the importance of beekeeping in Utah County and in general.
                to provide general education for all interested parties.
                to benefit local business, educational providers and most important, the beekeepers themselves.
            </Paragraph>
            <Paragraph>
                One of the critical differences in this association is the celebration of the diversity of ideas on the way to manage beehives.
                This difference provides for a more open discussion in meetings and allows for the exchange of ideas so that the beekeepers can
                explore the methods of beekeeping that will sustain our hives for longer periods and with healthier bees.   This celebration of diversity will remain as one of the cornerstones of the UCBA for the future.
            </Paragraph>
        </TextContainer>
    )
}
export default AboutPage