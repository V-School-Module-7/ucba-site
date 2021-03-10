import React from "react"
import styled from "styled-components"

import { BeeHeader, Container, BoxTitle, GreenLineContainer, HeaderParagraph, Paragraph } from "../../styles/globalstyles.js"

const Indent = styled.div`
    margin: 0 10%;
`

const BecomeMember = () => {
    return (
        <Container>
            <GreenLineContainer>
                <BoxTitle>Membership in the Utah County Beekeepers Association is open to anyone who meets the following criteria:</BoxTitle>
                <Indent>
                <HeaderParagraph>- Currently a Beekeeper or interested in becoming a beekeeper or interested in beekeeping</HeaderParagraph>

                <HeaderParagraph>- Submits the yearly dues for membership along with the membership form. The application and payment are due by January 31 of that year.</HeaderParagraph>
                </Indent>

                <HeaderParagraph>It is that easy! We don't mind if you are not currently keeping bees or if you live in Utah County or not.</HeaderParagraph>

                <HeaderParagraph>We want to welcome all who are interested in being part of our group.</HeaderParagraph>
            </GreenLineContainer>

            <BeeHeader>Membership Dues Information:</BeeHeader>

            <Paragraph>Those people who are interested in being an official member of the UCBA should submit the annual dues which are currently $20 per household. The annual dues are used to purchase supplies and help with our Bee a Beekeeper Program. The dues are also used to purchase educational materials (posters, books, observation hives, etc.) for use at educational events. Please submit dues by January 31 each year.</Paragraph>
            <Paragraph>All dues-paying members will receive the newsletter via email.
            </Paragraph>

            <BeeHeader>How to Pay your Dues</BeeHeader>
            <Paragraph>Click here to fill out an <a href="https://docs.google.com/forms/d/1f4nNeZFfyYn2vqLFDt1Cqvle8aMp3EaA1OAhnVCM65k/edit?ts=5ff898bb&gxids=7628" target="_blank" rel="noopener noreferrer">online application</a> and pay online</Paragraph>
            <Paragraph>Or, you can send a check or money order made out to "Utah County Beekeepers Association" along with a completed Membership Application Form to:</Paragraph>
            <Paragraph>Utah County Beekeepers Association <br></br>
            Attention: Secretary<br></br>
            2862 W 1060 N<br></br>
            Provo UT 84601</Paragraph>
            <Paragraph>NOTE: If ordering a T-shirt or Honey Bee Oil, you must pick them up at the next meeting you attend – they will not be shipped to your home!</Paragraph>
            <br></br>
            <br></br>
        </Container>
    )
}

export default BecomeMember