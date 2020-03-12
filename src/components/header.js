import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../components/logo"
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: ${props => props.bgColor};
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
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
  color: black;
  position: relative;
  display: flex;
  align-items: flex-end;
  list-style: none;
  padding: 10px 16px;
  margin: 0;
  font-weight: bold;
  display: flex;
  text-decoration: none;
  font-size: 20px;
`

const ListLink = props => (
  <li style={{ display: `inline`, marginRight: `2rem`, textDecoration: `none`, color: `black` }} >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => (
  <HeaderContainer bgColor="lavender">
    <LogoAndList>
        <div
          style={{
            maxWidth: 100, 
            
          }}>
            
        <Link
          to="/"
          style={{
            color: `white`,
            width: `100px`,
            height: `100px`,
            textDecoration: `none`
          }}
        >
          <Logo/>
        </Link>
        </div>
        <StyledLink>
        <ul style={{ listStyle: `none`, float: `right`, textDecoration: `none`}}></ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/report-a-swarm/">Report A Swarm</ListLink>
          <ListLink to="/bab/">Be A Beekeeper</ListLink>
          <ListLink to="/education/">Education</ListLink>
          <ListLink to="/membership/">Membership</ListLink>
      
      </StyledLink>
      
      </LogoAndList>
      
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
