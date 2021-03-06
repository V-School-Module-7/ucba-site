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

  @media (max-width: 450px) {
    width: 285px;
    left: 0;
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

  @media (max-width: 450px) {
    font-size: 26px;
  }
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

  @media (max-width: 450px) {
    font-size: 14px;
  }
`

const Underline = styled.div`
  width: 304px;
  height: 6px;
  float: center;

  background-color: #000000;

  @media (max-width: 450px) {
    width: 250px;
  }
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

const MobileGuide = props => {
  const { setToggle, show } = props
  return (
    <>
      <GuideContainer>
        <GuideSectionText>GUIDE SECTIONS</GuideSectionText>
        <FlexContainer>
          <Underline />
        </FlexContainer>
        <LinkContainer>
          <StyledLink
            onClick={() => setToggle(!show)}
            activeClass="active"
            to="general"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            GENERAL
          </StyledLink>
          <StyledLink
            onClick={() => setToggle(!show)}
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
            onClick={() => setToggle(!show)}
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
            onClick={() => setToggle(!show)}
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
            onClick={() => setToggle(!show)}
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
            onClick={() => setToggle(!show)}
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
            onClick={() => setToggle(!show)}
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
            onClick={() => setToggle(!show)}
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
            onClick={() => setToggle(!show)}
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
            onClick={() => setToggle(!show)}
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

export default MobileGuide
