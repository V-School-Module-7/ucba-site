import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import HeroHeader from "../heroheader"
import Beeimg from "../images/heroheader3.png"
import YouthBabApp from "../becoming-a-beekeeper/youthBAB/YouthBabApp.js"




function YouthBabForm() {
    return (
        <Layout>
        <SEO title="Youth BAB Program" />
        
        <HeroHeader img={Beeimg} text={"youth bab program"} />
       
           <YouthBabApp />
          
      </Layout>
    )
}

export default YouthBabForm