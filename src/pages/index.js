import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroHeader from '../components/heroheader'
import Beeimg from "../images/heroheaderbee.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHeader img = {Beeimg} text = {"hello world"}/>
  </Layout>
)

export default IndexPage