import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

const GuideContainer = styled.div`
  width: 349px;
  height: 550px;
  left: 40px;
  top: 40px;
  display: inline-block;
//   margin-top: 32px;
  background: #ffffff;
  border: 6px solid #c4c4c4;
  box-sizing: border-box;
  padding-top: 16px;

  @media (max-width: 450px) {
    width: 285px;
    left: 0;
    padding-top: 0;
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

//   margin-top: 100px;

  @media (max-width: 450px) {
    font-size: 16px;
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
    font-size: 10px;
  }
`

const Underline = styled.div`
  width: 304px;
  height: 6px;
  float: center;

  background-color: #000000;

  @media (max-width: 450px) {
    width: 250px;
    height: 2px;
  }
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
                        to="intro"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        INTRO
                    </StyledLink>

                    <StyledLink
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="AFB"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >AFB
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="EFB"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >EFB
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="chalkbrood"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >CHALKBROOD
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="sacbrood"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >SACBROOD
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="chilled-brood"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >CHILLED BROOD
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="nosema"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >NOSEMA
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="dysentery"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >DYSENTERY
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="paralysis"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >PARALYSIS
                    </StyledSubLink>


                    <StyledLink
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="bee-louse"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >BEE LOUSE
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="wax-moth"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >WAX MOTH
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="mice"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >MICE
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="ants"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >ants
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="small-hive-beetle"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >SMALL HIVE BEETLE
                    </StyledSubLink>

                    <StyledLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="parasites"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    > PARASITES
                    </StyledLink>

                    <StyledLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="predators"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >PREDATORS
                    </StyledLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="birds"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >BIRDS
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="skunks"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >SKUNKS
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="raccoons"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >RACCOONS
                    </StyledSubLink>

                    <StyledSubLink
                        onClick={() => setToggle(!show)}
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

export default MobileGuide