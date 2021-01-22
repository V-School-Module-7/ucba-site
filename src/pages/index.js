import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from '../components/heroheader'
import HomePageImage from "../images/HomePageImage.png"
import WhyBeekeeping from "../components/homepage/WhyBeekeeping"
import BeekeepersCalendar from '../components/homepage/BeekeepersCalendar'

const IndexPage = (props) => (
  <Layout>
    
    <SEO title="Home" />
    <HeroHeader img={HomePageImage} text={"WELCOME TO THE UTAH COUNTY BEEKEEPERS ASSOCIATION"} />
    <WhyBeekeeping />
    <BeekeepersCalendar />
  </Layout>
)

export default IndexPage

