import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import AnnualCalendar from "../components/calendar/AnnualCalendar.js"

import MobileGuide from '../components/calendar/mobile-guide.js'
import Index from '../components/calendar/index.js'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const GridContainer = styled.div`
  display: grid;
  /* grid-template-areas: "index content"; */
  grid-template-columns: 1fr 2fr;
  padding: 40px 0 0 15px ;
  margin: 40px 0 0 15px ;
  // padding: 0;
  width: 100%;

  @media (max-width: 1265px) {
    display: block;
  }
`

const StickyContainer = styled.div`
  position: fixed;
  z-index: 2;
  display: ${props => props.show ? "inline-block" : "none"};
  top: 50px;
  margin: auto;

  @media (max-width: 1000px) {
    // left: 100px;
    left: 10%;
  }
  @media(max-width: 500px){
    left: 5%;
  }

  @media(min-width: 1265px){
    display: none;
  }
`
const StickyContainer2 = styled.div`
  display: none;

  @media (min-width: 1265px) {
    display: inline-block;
    grid-column: 1 / 2;
    grid-template-rows: repeat(12, 1fr);
    position: sticky;
    top: 0;
    height: 100vh;
    width: 80%;
    margin-left: 40px;
  }
 
`

const StickyButton = styled.button`
  background-color: #F5D75F;
  border-radius: 15px;
  position: sticky;
  left: 45px; 
  z-index: 1;
  top: 16px;
  height: 45px;

  @media (max-width: 1000px){
    left: 40px; 
    margin-left: -120%; 
  }
  // @media (max-width: 500px){
  //   margin-left: -120%; 
  // }

  @media (min-width: 1265px) {
    visibility: hidden;
  }
`

const Icon = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`

const OverLay = styled.div`
  position: fixed;
  display: ${props => (props.show ? "default" : "none")};
  width: 100vw;
  // height: 150%;
  height: 150vh;
  top: -100px;
  background-color: rgba(100, 100, 100, 0.8);
  z-index: 1;
`



function Calendar() {
  const [toggle, setToggle] = useState(false)
  return (
    <Layout>
      <SEO title="Tasks" />
      <OverLay onClick={() => setToggle(!toggle)} show={toggle} />
      <HeroHeader img={EducationBee} text={"beekeeper tasks"} />
      <FlexContainer>
        <StickyButton onClick={() => setToggle(!toggle)}>
          <Icon />
          <Icon />
          <Icon />
        </StickyButton>
        <GridContainer>

          <StickyContainer show={toggle}>
            <MobileGuide show={toggle} setToggle={setToggle} />
          </StickyContainer>
          <StickyContainer2>
            <Index />
          </StickyContainer2>
          <div style={{ gridColumn: "2 / 3" }}>

            <AnnualCalendar />
          </div>
        </GridContainer>
      </FlexContainer>
    </Layout>
  )
}

export default Calendar