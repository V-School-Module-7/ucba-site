import React from "react"
import styled from "styled-components"

const TextContainer = styled.div`
  position: relative;
  width: 763px;
  height: 590px;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 102px;

  border: 6px solid #63966a;
  box-sizing: border-box;
`

const HeaderText = styled.div`
  position: relative;
  width: 176px;
  height: 43px;
  margin-top: 58px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-left: auto;
  margin-right: auto;
  

`

const ParagraphText = styled.div`
  position: relative;
  width: 651px;
  height: 373px;

  font-family: Futura;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin: 36px 56px 0 56px;
  /* margin-left: 56px;
margin-right: 56px; */

  color: #000000;
`

const General = () => {
  return (
    <TextContainer id="general">
      <HeaderText>GENERAL</HeaderText>
      <ParagraphText>
        This page is intended to give you some of the basic information you will
        need to know if you are interested in becoming a beekeeper.
        <br />
        <br />
        The Utah County Beekeepers Association strongly encourages you to read
        all you can and to speak with several beekeepers in your area BEFORE you
        commit to becoming a beekeeper so that you fully understand the
        commitments you will need to make to bee successful. The Utah County
        Beekeepers Association offers a beginners beekeeper course in the early
        spring each year. Watch our Upcoming Classes page for more information.
        The association also offers the opportunity to latch onto a mentor for
        your first year; this is a free service. For more information, email the
        association.
        <br />
        <br />
        Please visit the sections below or feel free to browse the entire page.
      </ParagraphText>
    </TextContainer>
  )
}

export default General
