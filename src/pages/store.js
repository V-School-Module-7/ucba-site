import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import PinkBeeHeader from "../images/PinkBeeHeader.png"
import StorePage from "../components/store/StorePage"

function Store() {
    return (
        <Layout>
        <SEO title="UCBA Store" />
        
        <HeroHeader img={PinkBeeHeader} text={"ucba store"} />        
           
            <StorePage />
            
      </Layout>
    )
}

export default Store