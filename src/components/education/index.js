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
//   margin: 24px 0px;
  cursor: pointer;
`

const StyledSubLink = styled(Link)`
    display: block;
    margin-left: 16px;
    // margin: 24px 0px;
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
                        to="intro"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        INTRO
                    </StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="diseases"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        DISEASES OF HONEYBEES
                    </StyledLink>
                    <StyledSubLink
                        activeClass="active"
                        to="AFB"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >AFB
                    </StyledSubLink>
                    <StyledSubLink
                        activeClass="active"
                        to="EFB"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >EFB
                    </StyledSubLink>
                    <StyledSubLink
                        activeClass="active"
                        to="chalkbrood"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >CHALKBROOD
                    </StyledSubLink>
                    <StyledSubLink
                        activeClass="active"
                        to="sacbrood"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >SACBROOD
                    </StyledSubLink>
                    <StyledSubLink
                        activeClass="active"
                        to="chilled-brood"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >CHILLED BROOD
                    </StyledSubLink>
                    <StyledSubLink
                        activeClass="active"
                        to="nosema"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >NOSEMA
                    </StyledSubLink>
                    <StyledSubLink
                        activeClass="active"
                        to="dysentery"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >DYSENTERY
                    </StyledSubLink>
                    <StyledSubLink
                        activeClass="active"
                        to="paralysis"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >PARALYSIS
                    </StyledSubLink>

                    <StyledLink
                        activeClass="active"
                        to="pests"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        PESTS OF THE HONEYBEE
                    </StyledLink>

                    <StyledSubLink
                        activeClass="active"
                        to="bee-louse"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >BEE LOUSE
                    </StyledSubLink>

                    <StyledSubLink
                        activeClass="active"
                        to="wax-moth"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >WAX MOTH
                    </StyledSubLink>

                    <StyledSubLink
                        activeClass="active"
                        to="mice"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >MICE
                    </StyledSubLink>

                    <StyledSubLink
                        activeClass="active"
                        to="ants"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >ants
                    </StyledSubLink>

                    <StyledSubLink
                        activeClass="active"
                        to="small-hive-beetle"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >SMALL HIVE BEETLE
                    </StyledSubLink>

                    <StyledLink
                        activeClass="active"
                        to="parasites"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    > PARASITES
                    </StyledLink>

                    <StyledLink
                        activeClass="active"
                        to="predators"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        PREDATORS
                    </StyledLink>

                    <StyledSubLink
                        activeClass="active"
                        to="birds"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >BIRDS
                    </StyledSubLink>

                    <StyledSubLink
                        activeClass="active"
                        to="skunks"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >SKUNKS
                    </StyledSubLink>

                    <StyledSubLink
                        activeClass="active"
                        to="raccoons"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >RACCOONS
                    </StyledSubLink>

                    <StyledSubLink
                        activeClass="active"
                        to="bears"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >BEARS
                    </StyledSubLink>
                    
                </LinkContainer>
            </GuideContainer>
        </>
    )
}

export default Index