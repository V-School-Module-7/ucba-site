import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import HoneyInfo from '../components/education/HoneyInfo'




function HoneyInformation() {
    return (
        <Layout>
            <SEO title="Honey Information" />
            <HeroHeader img={EducationBee} text={"honey information"} />
            <HoneyInfo />


        </Layout>
    )
}

export default HoneyInformation