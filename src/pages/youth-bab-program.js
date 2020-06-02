import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import Beeimg from "../images/heroheader3.png"
import YouthBAB from "../components/becoming-a-beekeeper/youthBAB/YouthBAB.js"




function YouthBabProgram() {
    return (
        <Layout>
        <SEO title="Youth BAB Program" />
        
        <HeroHeader img={Beeimg} text={"youth bab program"} />
       
            <YouthBAB />
          
      </Layout>
    )
}

export default YouthBabProgram