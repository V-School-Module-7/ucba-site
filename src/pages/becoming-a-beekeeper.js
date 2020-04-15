import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import Beeimg from "../images/heroheader3.png"
import Index from "../components/becoming-a-beekeeper/index"
import General from "../components/becoming-a-beekeeper/general"
import CommittingToBeekeeping from "../components/becoming-a-beekeeper/committing-to-beekeeping.js"
import SelectingAnApiarySite from "../components/becoming-a-beekeeper/selecting-an-apiary-site"
import LawsAndLicenses from "../components/becoming-a-beekeeper/laws-and-licenses"
import GettingStarted from "../components/becoming-a-beekeeper/getting-started"
import BeeBreeds from "../components/becoming-a-beekeeper/bee-breeds"
import Resources from "../components/becoming-a-beekeeper/resources"
import GettingStung from "../components/becoming-a-beekeeper/getting-stung"
import KindsOfBeeKeepers from "../components/becoming-a-beekeeper/kinds-of-beekeepers"
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
`

const StickyContainer = styled.div`
  grid-area: index;
  grid-template-rows: repeat(12, 1fr);
  position: sticky;
  top: 0;
  height: 100vh;
  margin-left: 40px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Becoming A BeeKeeper" />
    <HeroHeader img={Beeimg} text={"become a beekeeper"} />
    <FlexContainer>
      <GridContainer>
        <StickyContainer>
          <Index />
        </StickyContainer>
        <div>
          <General />
          <CommittingToBeekeeping />
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

export default IndexPage
