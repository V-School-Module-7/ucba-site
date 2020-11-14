import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import Membership from "../images/Membership.png"
import Sponsor from '../components/membership/Sponsor.js'



function Sponsors() {
    return (
        <Layout>
            <SEO title="Sponsors" />
            <HeroHeader img={Membership} text={"sponsors"} />
            <Sponsor />


        </Layout>
    )
}

export default Sponsors
