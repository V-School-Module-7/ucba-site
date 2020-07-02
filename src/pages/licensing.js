import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import BABimage from "../images/BABimage.png"
import LicensingInfo from "../components/becoming-a-beekeeper/licensing/LicensingInfo"

function Licensing() {
    return (
        <Layout>
        <SEO title="Licensing" />
        
        <HeroHeader img={BABimage} text={"licensing"} />        
           
            <LicensingInfo />
            
      </Layout>
    )
}

export default Licensing