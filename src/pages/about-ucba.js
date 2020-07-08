import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import BABimage from "../images/BABimage.png"
import AboutPage from "../components/about/Aboutpg.js"

function About() {
    return (
        <Layout>
            <SEO title="About" />

            <HeroHeader img={BABimage} text={"about"} />

            <AboutPage />

        </Layout>
    )
}

export default About