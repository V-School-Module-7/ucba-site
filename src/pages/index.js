import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from '../components/heroheader'
import HomePageImage from "../images/HomePageImage.png"
import Whybeekeeping from "../components/homepage/WhyBeekeeping"
import BeekeepersCalendar from '../components/homepage/BeekeepersCalendar'
import coneimg from "../images/homebeecones.png"
import BeekeepingWhy from "../components/homepage/BeekeepingWhy"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHeader img={HomePageImage} text={"WELCOME TO THE UTAH COUNTY BEEKEEPERS ASSOCIATION"} />
    {/* <Whybeekeeping img={coneimg}></Whybeekeeping> */}
    <BeekeepingWhy />
    <BeekeepersCalendar />
  </Layout>
)

export default IndexPage