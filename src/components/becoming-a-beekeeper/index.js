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

  @media (max-width:1000px) {
    visibility:hidden;
  }
`
const HiddenGuideContainer = styled.div`
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
const DropDown = styled.div`
  position: relative;
  display: inline-block;
  @media (min-width:1000px) {
    visibility:hidden;
  }
`

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

const DropButton = styled.div`
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`

function myFunction() {
  document.getElementById({myDropdown}).classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches({DropButton})) {
    var dropdowns = document.getElementsByClassName({DropDownContent});
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const index = () => {
  return (
      <DropDown>
      <DropButton onclick={myFunction()}>DropDown</DropButton>
      <DropDownContent id={myDropDown}>
        <HiddenGuideContainer>

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
        </HiddenGuideContainer>
      </DropDownContent>
    </DropDown>
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
  )
}

export default index
