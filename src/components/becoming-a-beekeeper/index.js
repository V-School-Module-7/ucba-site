import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

const GuideContainer = styled.div`
  width: 349px;
  height: 550px;
  left: 40px;
  top: 40px;
  display: inline-block;
  margin-top: 32px;
  background: #ffffff;
  border: 6px solid #c4c4c4;
  box-sizing: border-box;
  padding-top: 16px;

  @media (max-width: 1265px) {
    /* visibility: hidden; */
  }
`

const GuideSectionText = styled.div`
  text-align: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: #000000;
`

const LinkContainer = styled.div`
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`

const Underline = styled.div`
  width: 304px;
  height: 6px;
  float: center;

  background-color: #000000;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StyledLink = styled(Link)`
  display: block;
  margin: 24px 0px;
  cursor: pointer;
`

const index = (prop) => {
  return (
    <>
      <GuideContainer>
        <GuideSectionText>GUIDE SECTIONS</GuideSectionText>
        <FlexContainer>
          <Underline />
        </FlexContainer>
        <LinkContainer>
          <StyledLink
            activeClass="active"
            to="general"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            General
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="committing-to-beekeeping"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            COMMITTING TO BEEKEEPING
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="basic-parts-of-the-hive"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            BASIC PARTS OF THE HIVE
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="selecting-an-apiary-site"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            SELECTING AN APIARY SITE
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="laws-and-licenses"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            LAWS & LICENSES
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="getting-started"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            GETTING STARTED
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="bee-breeds"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            BEE BREEDS
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="resources"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            RESOURCES
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="getting-stung"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            GETTING STUNG
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="kinds-of-beekeepers"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            KINDS OF BEEKEEPERS
          </StyledLink>
        </LinkContainer>
      </GuideContainer>
    </>
  )
}

export default index
