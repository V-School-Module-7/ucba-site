import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from '../components/heroheader'
import Beeimg from "../images/heroheader3.png"
import Index from "../components/becoming-a-beekeeper/index"
import Home from "../components/becoming-a-beekeeper/home"
import Home2 from "../components/becoming-a-beekeeper/home2"
import styled from 'styled-components'

const GridContainer = styled.div`
display: grid;
grid-template-areas: "index content";
grid-template-columns: 1fr 2fr;
margin-top: 40px;
`

const StickyContainer = styled.div`
grid-area: index;
grid-template-rows: repeat(12, 1fr);
position:sticky;
top:0;
height:100vh;
margin-left: 40px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Becoming A BeeKeeper" />
    <HeroHeader img = {Beeimg} text = {"become a beekeeper"}/>
    <GridContainer>
      <StickyContainer>
        <Index/>
      </StickyContainer>
      <div>
        <Home/>
        <Home2/>
      </div>
    </GridContainer>
  </Layout>
)

export default IndexPage