import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Bee404 from "src/images/bee404.jpg"
import SEO from "../components/seo"

const Page = styled.div`
background-color: pink;
`

const Container = styled.div`
background color: magenta;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 1fr auto;
position: relative;
width: 100%;
height: auto;
text-align: center;
margin: 10%;

`
const ParagraphContainer = styled.div`
display: block;
background-color: purple;
grid-column: 1/2;
justify-self: center;
font-family: Futura;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 32px;
color: #000000;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
`
const Bee404 = styled.img`
//  https://www.instagram.com/p/BeWhES4F3g7/
  width: 80%;
  grid-column: 2/3;
`

const NotFoundPage = () => (
  <Layout>

    <SEO title="404: Not found" />
    <Page>
      <Container>
        <h1>PAGE NOT FOUND</h1>
        <ParagraphContainer>
          <p> There doesn't seem to <i>bee</i> a page here.</p>
        </ParagraphContainer>
        <ParagraphContainer>
          <p>What a <i>buzz</i>kill.</p>
        </ParagraphContainer>
        <ParagraphContainer>
          <p>To return the hive, (and avoid having us <i>drone</i> on with further bee puns) click the logo above, or <a href="/">here</a>.</p>
        </ParagraphContainer>
      </Container>
    </Page>
  </Layout >
)

export default NotFoundPage
