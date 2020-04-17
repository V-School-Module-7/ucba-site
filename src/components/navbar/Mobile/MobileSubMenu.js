import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SubMenuContainer = styled.ul`
  visibility: hidden;
  display: none;
  z-index: 3;
  margin: 0%;
  padding: 0;
  position: absolute;
  top: 100%;
  position: absolute;
  left: 0px;
  &::before {
    content: "";
    position: absolute;
    background-color: #f5d75f;
  }
  & ul:hover {
    visibility: visible;
    display: block;
  }
`

const SubMenuItem = styled.li`
  list-style: none;
  color: black;
  background-color: #f5d75f;
  font-weight: lighter;
  width: 275px;
  height: 53px;
  left: 613px;
  top: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  background-clip: padding;
  background-clip: content-box;

  :hover {
    color: black;
    font-weight: bold;
  }
`
const SubMenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  line-height: 20px;
  margin: 0;
  color: inherit;

  :visited {
    color: inherit;
  }
`

function MobileSubMenu(props) {
  const subMenuItems = props.items.map((subMenuItem, i) => {
    const { name, link } = subMenuItem
    return (
      <SubMenuItem key={i}>
        <SubMenuLink as={Link} to={link}>
          {name}
        </SubMenuLink>
      </SubMenuItem>
    )
  })
  return <SubMenuContainer>{subMenuItems}</SubMenuContainer>
}

export default MobileSubMenu
