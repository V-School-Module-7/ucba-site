import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import Beeimg from "../images/heroheader3.png"
import YouthBabApp from "../components/becoming-a-beekeeper/youthBAB/YouthBabApp.js"




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