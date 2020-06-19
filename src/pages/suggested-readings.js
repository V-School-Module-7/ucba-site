import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import ReadingsIntro from '../components/education/SuggestedReadings/ReadingsIntro.js'
import BooksPublications from '../components/education/SuggestedReadings/BooksPublications.js'
import HelpfulArticles from '../components/education/SuggestedReadings/HelpfulArticles.js'


function SuggestedReadings() {
    return (
        <Layout>
            <SEO title="Suggested Readings" />
            <HeroHeader img={EducationBee} text={"suggested reading"} />
            <ReadingsIntro />
            <BooksPublications />
            <HelpfulArticles />
        </Layout>
    )
}

export default SuggestedReadings