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

const Index = (prop) => {
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
            GENERAL
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="Diseases"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            DISEASES OF HONEYBEES
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="Pests"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
           PESTS OF THE HONEYBEE
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="Parasites"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            PARASITES
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="Predators"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            PREDATORS
          </StyledLink>
          
        </LinkContainer>
      </GuideContainer>
    </>
  )
}

export default Index