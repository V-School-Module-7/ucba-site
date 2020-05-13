import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import FunBeeFacts from '../components/education/FunFacts'




function FunFacts() {
    return (
        <Layout>
            <SEO title="Fun Facts" />
            <HeroHeader img={EducationBee} text={"fun facts"} />
            <FunBeeFacts />


        </Layout>
    )
}

export default FunFacts