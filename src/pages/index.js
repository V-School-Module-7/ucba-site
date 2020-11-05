import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from '../components/heroheader'
import HomePageImage from "../images/HomePageImage.png"
import WhyBeekeeping from "../components/homepage/WhyBeekeeping"
import BeekeepersCalendar from '../components/homepage/BeekeepersCalendar'
import HomeBackground from "../ImageComponents/HomeBackground.js"
// import { graphql , useStaticQuery } from 'gatsby'

const IndexPage = (props) => (
  <Layout>
    <HomeBackground>
    <SEO title="Home" />
    <HeroHeader img={HomePageImage} text={"WELCOME TO THE UTAH COUNTY BEEKEEPERS ASSOCIATION"} />
    {/* <BackgroundImage
      fluid={props.data.indexImage.childImageSharp.fluid}
    >

      Text Should Go Here
    </BackgroundImage> */}
    <WhyBeekeeping />
    <BeekeepersCalendar />
    </HomeBackground>
  </Layout>
)

export default IndexPage

