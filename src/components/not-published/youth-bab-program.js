import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import HeroHeader from "../heroheader"
import Beeimg from "../images/heroheader3.png"
import YouthBAB from "../becoming-a-beekeeper/youthBAB/YouthBAB.js"




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