import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

const GuideContainer = styled.div`
  width: 349px;
  left: 40px;
  top: 40px;
  padding-bottom: 5%;
  display: inline-block;
  line-height: 300px;
//   margin-top: 32px;
  background: #ffffff;
  border: 6px solid #c4c4c4;
  box-sizing: border-box;
  padding-top: 16px;
  z-index: 10;

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
  margin: 12px 0px;
  cursor: pointer;

  @media (max-width: 900){
      margin: 6px 0px;
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
                        to="january"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        January
                    </StyledLink>
                    <StyledLink
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
                        activeClass="active"
                        to="april"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    > April
                    </StyledLink>

                    <StyledLink
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
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
                        onClick={() => setToggle(!show)}
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

export default MobileGuide