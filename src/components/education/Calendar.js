import React from "react"
import styled from "styled-components"
import HeroHeader from "../components/heroheader"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import EducationBee from "../../images/EducationBee.png"

// const HomeContainer = styled.div`
//   display: grid;
//   grid-template-columns: 50% 50%;
//   grid-template-rows: 1fr auto;
//   position: relative;
//   width: 100%;
//   height: auto;
//   text-align: center;
//   padding-bottom: 80px;

//   @media (max-width: 800px) {
//     display: block;
//   }
// `

const TextHeader = styled.h1`
  height: 33px;
  margin: auto;
  display: inline-block;
  border-bottom: 6px solid #63966a;
  padding-bottom: 16px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  grid-column: 1 / 3;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-top: 40px;
  margin-bottom: 60px;

  @media (max-width: 500px){
    font-size: 24px;
  }
`

const Calendar = () => {
    return (
        <Layout>
            <SEO title="Calendar" />
            <HeroHeader img={EducationBee} text={"Calendar"} />
            {/* <HomeContainer> */}
                <TextHeader>Beekeepers' Calendar</TextHeader>
                <iframe src="https://calendar.google.com/calendar/embed?src=jpjrv0fve1h6n9sgf3aafvh6eg%40group.calendar.google.com&ctz=America%2FDenver" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

            {/* </HomeContainer> */}
        </Layout>
    )
}

export default Calendar