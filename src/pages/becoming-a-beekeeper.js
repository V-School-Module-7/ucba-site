import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import BABimage from "../images/BABimage.png"
import Index from "../components/becoming-a-beekeeper/index"
import General from "../components/becoming-a-beekeeper/general"
import CommittingToBeekeeping from "../components/becoming-a-beekeeper/committing-to-beekeeping.js"
import BasicPartsOfTheHive from "../components/becoming-a-beekeeper/basic-parts-of-the-hive.js"
import SelectingAnApiarySite from "../components/becoming-a-beekeeper/selecting-an-apiary-site"
import LawsAndLicenses from "../components/becoming-a-beekeeper/laws-and-licenses"
import GettingStarted from "../components/becoming-a-beekeeper/getting-started"
import BeeBreeds from "../components/becoming-a-beekeeper/bee-breeds"
import Resources from "../components/becoming-a-beekeeper/resources"
import GettingStung from "../components/becoming-a-beekeeper/getting-stung"
import KindsOfBeeKeepers from "../components/becoming-a-beekeeper/kinds-of-beekeepers"
import MobileGuide from "../components/becoming-a-beekeeper/mobile-guide"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  // justify-content: space-around;
  width: 100%;
`

const GridContainer = styled.div`
  display: grid;
  /* grid-template-areas: "index content"; */
  grid-template-columns: 1fr 2fr;
  margin-top: 20px;
  grid-gap: 50px;
  // margin: 40px 15px 0 15px ;
  // padding: 0;

  // @media (max-width: 1265px) {
    @media (max-width: 1000px) {
    display: block;
  }
`

const StickyContainer = styled.div`
  position: fixed;
  z-index: 2;
  display: ${props=>props.show? "inline-block" : "none"};
  top: 50px;
  left: auto;

  @media(max-width: 500px){
    left: 16px;
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
    margin-left: 40px;
  }
`

const StickyButton = styled.button`
  position: sticky;
  /* left: -16px; */
  z-index: 1;
  top: 16px;

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
  height: 115vh;
  top: -100px;
  background-color: rgba(100, 100, 100, 0.8);
  z-index: 1;
`

const IndexPage = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <Layout>
      <SEO title="Becoming A BeeKeeper" />
      <OverLay onClick={() => setToggle(!toggle)} show={toggle} />
      <HeroHeader img={BABimage} text={"become a beekeeper"} />
      <FlexContainer>
        <GridContainer>
          <StickyButton onClick={() => setToggle(!toggle)}>
            <Icon />
            <Icon />
            <Icon />
          </StickyButton>
          <StickyContainer show={toggle}>
            <MobileGuide show={toggle} setToggle={setToggle} />
          </StickyContainer>
          <StickyContainer2>
            <Index />
          </StickyContainer2>
          <div style={{gridColumn: "2 / 3"}}>
            <General />
            <CommittingToBeekeeping />
            <BasicPartsOfTheHive />
            <SelectingAnApiarySite />
            <LawsAndLicenses />
            <GettingStarted />
            <BeeBreeds />
            <Resources />
            <GettingStung />
            <KindsOfBeeKeepers />
          </div>
        </GridContainer>
      </FlexContainer>
    </Layout>
  )
}

export default IndexPage
