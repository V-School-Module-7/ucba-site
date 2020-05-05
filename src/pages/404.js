import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import bee404 from "../images/bee404.jpg"
import SEO from "../components/seo"

const Page = styled.div`
background-color: #F5D75F;

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
`
const Title = styled.h1`
padding-top: 10px;
font-size: 24px;
`
const ParagraphContainer = styled.div`
grid-column: 1/2;
justify-self: center;
font-family: Work Sans;
// font-style: normal;
// font-weight: bold;
font-size: 24px;
line-height: 32px;
color: #000000;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
`

const Div = styled.div`
  grid-column: 2/3;
  grid-row: 1/5;
  margin: 10px auto;
  height: auto;
  width: 325px;

`
const BeeImage = styled.img`
  width: 100%;
`

const NotFoundPage = () => (
  <Layout>

    <SEO title="404: Not found" />
    <Page>
      <Container>
        <Title>
          <h1>PAGE NOT FOUND</h1>
        </Title>

        <ParagraphContainer>
          <p> There doesn't seem to bee a page here.</p>
        </ParagraphContainer>
        <ParagraphContainer>
          <p>What a buzzkill.</p>
        </ParagraphContainer>
        <ParagraphContainer>
          <p>To return the hive, (and avoid having us drone on with further bee puns) click the logo above, or <a href="/">click here</a>.</p>
        </ParagraphContainer>
        <Div>
          <BeeImage src={bee404} />
        </Div>
      </Container>
    </Page>
  </Layout >
)

export default NotFoundPage
