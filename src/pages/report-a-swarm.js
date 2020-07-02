import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from '../components/heroheader'
import SwarmImage from "../images/SwarmImage.png"
import ReportASwarm from "../components/report-a-swarm/reportASwarm"



const ReportASwarmPage = () => (
    <Layout>
        <SEO title="Report A Swarm" />
        <HeroHeader img={SwarmImage} text={"Report A Swarm"} />
        <ReportASwarm></ReportASwarm>
    </Layout>
)

export default ReportASwarmPage