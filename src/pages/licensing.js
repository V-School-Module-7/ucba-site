import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import Beeimg from "../images/heroheader3.png"
import LicensingInfo from "../components/becoming-a-beekeeper/licensing/LicensingInfo"




function Licensing() {
    return (
        <Layout>
        <SEO title="Licensing" />
        
        <HeroHeader img={Beeimg} text={"licensing"} />
       
           
           
            <LicensingInfo />
          
        
   
      </Layout>
    )
}

export default Licensing