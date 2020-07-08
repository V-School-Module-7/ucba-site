import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import AfricanHoneyBees from "../components/education/african-honey-bee"




function AfricanizedHoneybee() {
    return (
        <Layout>
            <SEO title="Africanized HoneyBees" />
            <HeroHeader img={EducationBee} text={"africanized honeybees"} />
            <AfricanHoneyBees />


        </Layout>
    )
}

export default AfricanizedHoneybee  