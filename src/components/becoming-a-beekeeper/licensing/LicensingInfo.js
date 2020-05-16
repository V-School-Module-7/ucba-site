import React from "react"
import styled from "styled-components"
// import {
//   ParagraphTextBottomMargin,
// } from "../../styles/babstyles.js"

const TextContainer = styled.div`
  position: relative;
  width: 763px;
  height: auto;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 102px;
  padding-left: 8%;
  padding-right: 8%;
  padding-bottom: 5%;

  border: 6px solid #63966a;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 300px;
    padding-left: 8px;
    padding-right: 8px;
  }
`
const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 30px;
`
const Paragraph = styled.p`
margin-bottom: 48px;
`

const LicenseLink = styled.a`
  width: 50%;

`

function LicensingInfo() {
  return (
    <TextContainer>
      <Title>Licensing</Title>
      <Paragraph>Beekeepers in the state of Utah are required by law to have a license. However, the small fee supplies much more than a legal document. This gives you access to professional hive inspections, analysis of lost hives, even alerts regarding pest or disease issues threatening your area. For many beekeepers a license will be the least expensive, yet most useful tool they invest in. A license can be purchased at the link below.</Paragraph>
      <div>
      <LicenseLink href="http://webapp.ag.utah.gov/LicenseLookup/?parameters=c02d455f972917d6571a65e03e5a4b61,b4bb55d6c8fac1e3164ca902ba7b75343677b9db8b531c9e7602ab4a6041ca61,f07a07514617a53328ae04b6e387af27">http://webapp.ag.utah.gov/LicenseLookup/?parameters=c02d455f972917d6571a65e03e5a4b61,b4bb55d6c8fac1e3164ca902ba7b75343677b9db8b531c9e7602ab4a6041ca61,f07a07514617a53328ae04b6e387af27</LicenseLink>
      </div>
    </TextContainer>
  )
}
export default LicensingInfo