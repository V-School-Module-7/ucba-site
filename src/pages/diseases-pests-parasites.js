import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import Diseases from '../components/education/Diseases'
import Pests from '../components/education/Pests'
import Parasites from '../components/education/Parasites'
import Predators from '../components/education/Predators'
import Index from '../components/education/index'
import Intro from '../components/education/Intro'

function DiseasesPestsParasites() {
    return (
        <Layout>
            <SEO title="Diseases, Pests and Parasites" />
            <HeroHeader img={EducationBee} text={"diseases, pests & parasites"} />
            <Intro />
            <Diseases />
            <Pests />
            <Parasites />
            <Predators />
        </Layout>
    )
}

export default DiseasesPestsParasites