import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SubMenu from "./MobileSubMenu"

const StyledLink = styled(Link)`
  color: black;
  position: relative;
  display: flex;
  align-items: flex-end;
  list-style: none;
  margin: 0;
  font-weight: bold;
  display: flex;
  text-decoration: none;
  font-size: 20px;
`
const StyledLi = styled.li`
  color: black;
  position: relative;
  display: flex;
  align-items: flex-end;
  list-style: none;
  margin: 0;
  font-weight: bold;
  display: flex;
  text-decoration: none;
  font-size: 20px;
  list-style-type: none;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background-color: white;
  }
  &:hover > ul,
  & ul:hover {
    visibility: visible;
    display: block;
  }
`
const StyledSpan = styled.span`
  display: inline-block;
`

function MobileMenuLink(props) {
  // console.log("CHECKING PROPS in MobileMenuLink")
  // console.log(props.menuLinks)
  return (
    <StyledLi key={props.name}>
      {props.link ? (
        <StyledLink to={props.link}>{props.name}</StyledLink>
      ) : (
          <StyledSpan>{props.name}</StyledSpan>
        )}
      {props.sublinks.length > 0 && <SubMenu items={props.sublinks} />}
    </StyledLi>
  )
}
export default MobileMenuLink