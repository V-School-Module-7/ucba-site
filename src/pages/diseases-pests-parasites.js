import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import DiseasesPestsParasites from '../components/education/DiseasesPestsParasites'




function Diseases() {
    return (
        <Layout>
            <SEO title="Diseases, Pests and Parasites" />
            <HeroHeader img={EducationBee} text={"diseases, pests & parasites"} />
            <DiseasesPestsParasites />


        </Layout>
    )
}

export default Diseases