import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from '../components/heroheader'
import BeeSwarmimg from "../images/RASheroimage.png"
import ReportASwarm from "../components/report-a-swarm/reportASwarm"



const ReportASwarmPage = () => (
    <Layout>
        <SEO title="Report A Swarm" />
        <HeroHeader img={BeeSwarmimg} text={"Report A Swarm"} />
        <ReportASwarm></ReportASwarm>
    </Layout>
)

export default ReportASwarmPage