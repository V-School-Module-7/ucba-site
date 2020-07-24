import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import FunBeeFacts from '../components/education/FunFacts'
import BeeBackground from "../images/BeeBackground.png"



function FunFacts() {
    return (
        <Layout>
            <SEO title="Fun Facts" />
            <HeroHeader img={EducationBee} text={"fun facts"} />
            <FunBeeFacts backgroundImage="BeeBackground"/>


        </Layout>
    )
}

export default FunFacts