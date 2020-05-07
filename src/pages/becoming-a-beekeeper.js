import React,{useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import Beeimg from "../images/heroheader3.png"
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
import MobleGuide from "../components/becoming-a-beekeeper/moble-guide"
import styled from "styled-components"


const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "index content";
  grid-template-columns: 1fr 2fr;
  margin-top: 40px;
  grid-gap: 110px;

  @media (max-width:1265px) {
    display:block
  }
`

const StickyContainer = styled.div`
  position: fixed;
  z-index: 2;
  display: ${props=>props.show? "inline-block" : "none"};
`
const StickyContainer2 = styled.div`
  display:none;
  @media (min-width:1265px) {
    display:inline-block;
    grid-area: index;
    grid-template-rows: repeat(12, 1fr);
    position: sticky;
    top: 0;
    height: 100vh;
    margin-left: 40px;
  }
`

const StickyButton = styled.button`
position: fixed;
left: 16px;
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
display: ${props=>props.show? "default" : "none"};
width: 100vw;
height: 115vh;
top:-100px;
background-color: rgba(100,100,100,.8);
z-index: 1;
`

const IndexPage = () => {
  const [toggle,setToggle] = useState(false)
  return(
    <Layout>
      <SEO title="Becoming A BeeKeeper" />
      <OverLay onClick={() => setToggle(!toggle)} show={toggle}/>
      <HeroHeader img={Beeimg} text={"become a beekeeper"} />
      <FlexContainer>
        <GridContainer>
          <StickyButton onClick={() => setToggle(!toggle)}>
            <Icon/>
            <Icon/>
            <Icon/>
          </StickyButton>
          <StickyContainer show={toggle}>
            <MobleGuide show={toggle} setToggle={setToggle}/>
          </StickyContainer>
          <StickyContainer2>
            <Index />
          </StickyContainer2>
          <div>
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
