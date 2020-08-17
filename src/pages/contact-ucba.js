import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import Membership from "../images/Membership.png"
import ContactUCBA from '../components/membership/ContactUCBA.js'



function ContactUs() {
    return (
        <Layout>
            <SEO title="Sponsors" />
            <HeroHeader img={Membership} text={"contact ucba"} />
            <ContactUCBA backgroundImage="Membership"/>


        </Layout>
    )
}

export default ContactUs
