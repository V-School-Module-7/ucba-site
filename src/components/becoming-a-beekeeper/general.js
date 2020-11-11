import React from "react"
import styled from "styled-components"

import {GreenLineContainer, Container, Paragraph} from "../../styles/globalstyles.js"

const HeaderText = styled.div`
  position: relative;
  text-align: center;
  height: 43px;
  margin-top: 58px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  color: #000000;
  @media (max-width: 900px) {
    font-size: 31px;
  }

  @media (max-width: 550px) {
    font-size: 26px;
  }
`

const General = () => {
  return (
    <Container id="general">
      <GreenLineContainer>
      <HeaderText>GENERAL</HeaderText>
      <Paragraph>
        This page is intended to give you some of the basic information you will
        need to know if you are interested in becoming a beekeeper.
      </Paragraph>
      <Paragraph>
        The Utah County Beekeepers Association strongly encourages you to read
        all you can and to speak with several beekeepers in your area BEFORE you
        commit to becoming a beekeeper so that you fully understand the
        commitments you will need to make to bee successful. The Utah County
        Beekeepers Association offers a beginners beekeeper course in the early
        spring each year. Watch our Upcoming Classes page for more information.
        The association also offers the opportunity to latch onto a mentor for
        your first year; this is a free service. For more information, email the
        association.
      </Paragraph>
      <Paragraph>
        Please visit the sections below or feel free to browse the entire page.
      </Paragraph>
      </GreenLineContainer>
    </Container>
  )
}

export default General
