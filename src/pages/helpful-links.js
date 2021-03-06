import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import Links from '../components/education/HelpfulLinks'


function HelpfulLinks() {
    return (
        <Layout>
            <SEO title="Helpful Links" />
            <HeroHeader img={EducationBee} text={"helpful links"} />
            <Links />
        </Layout>
    )
}

export default HelpfulLinks