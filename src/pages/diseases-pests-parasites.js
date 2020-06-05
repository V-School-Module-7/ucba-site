import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import Diseases from '../components/education/Diseases'
import Pests from '../components/education/Pests'
import Parasites from '../components/education/Parasites'

function DiseasesPestsParasites() {
    return (
        <Layout>
            <SEO title="Diseases, Pests and Parasites" />
            <HeroHeader img={EducationBee} text={"diseases, pests & parasites"} />
            <Diseases />
            <Pests />
            <Parasites />
        </Layout>
    )
}

export default DiseasesPestsParasites