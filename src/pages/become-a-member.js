import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import Membership from "../images/Membership.png"
import BecomeMember from '../components/membership/BecomeMember'



function BecomeAMember() {
    return (
        <Layout>
            <SEO title="Become a member" />
            <HeroHeader img={Membership} text={"become a member"} />
            <BecomeMember backgroundImage="Membership" />


        </Layout>
    )
}

export default BecomeAMember