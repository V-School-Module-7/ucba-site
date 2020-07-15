import React, { useState } from "react"
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
//   align-items: center;
`
const StyledLink = styled(Link)`
  display: block;
//   margin: 24px 0px;
  cursor: pointer;
`

const StyledSubLink = styled(Link)`
    display: block;
    margin-left: 16px;
    cursor: pointer;
    text-transform: uppercase;
    ::before {
        content: "• ";
    }
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
                        to="january"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        January
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="february"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        February
                    </StyledLink>
                 
                    <StyledLink
                        activeClass="active"
                        to="march"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        March
                    </StyledLink>

                    <StyledLink
                        activeClass="active"
                        to="april"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    > April
                    </StyledLink>

                    <StyledLink
                        activeClass="active"
                        to="may"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        May
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="june"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        June
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="july"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        July
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="august"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        August
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="september"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        September
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="october"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        October
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="november"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        November
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="december"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        December
                    </StyledLink>

                </LinkContainer>
            </GuideContainer>
        </>
    )
}

export default Index