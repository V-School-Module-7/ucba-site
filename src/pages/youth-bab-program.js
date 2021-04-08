import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import BABimage from "../images/BABimage.png"
import YouthBAB from "../components/becoming-a-beekeeper/youthBAB/YouthBAB.js"
import SheetMap from "../components/report-a-swarm/SheetMap.js"




function YouthBabProgram() {
    return (
        <Layout>
        <SEO title="Youth BAB Program" />
        
        <HeroHeader img={BABimage} text={"youth bab program"} />
       
            <YouthBAB />
          
      </Layout>
    )
}

export default YouthBabProgram