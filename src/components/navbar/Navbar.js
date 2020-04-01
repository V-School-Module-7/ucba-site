import React from "react"
import { Link } from "gatsby"
import Logo from "../logo"
import styled from "styled-components"
import MenuLink from "./MenuLink"

const HeaderContainer = styled.header`
  background-color: #ffffff;
  position: relative;
  top: 0;
  width: 100%;
  height: 150px;
  z-index: 3;
  background: ${props => props.bgColor};
  margin: 0;
  float: left;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  text-decoration: ${props => props.textDecor};
  color: ${props => props.color};
`
const LogoAndList = styled.div`
  margin: 0;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  font-family: Work Sans;
  display: flex;
  align-items: flex-end;
  color: black;
`

const StyledLink = styled(Link)`
  color: white;
  width: 100px;
  height: 100px;
  text-decoration: none;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-right: 96px;
`

const Navbar = ({ menuLinks }) => (
  <HeaderContainer>
    <LogoAndList textDecor="textDecor">
      <div
        style={{
          maxWidth: 100,
        }}
      >
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </div>

      <LinkContainer>
        {menuLinks.map(link => (
          <MenuLink {...link} />
        ))}
      </LinkContainer>
    </LogoAndList>
  </HeaderContainer>
)

export default Navbar
