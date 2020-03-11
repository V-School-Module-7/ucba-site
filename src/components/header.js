import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../components/logo"
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: ${props => props.bgColor};
  margin: 0;
`
const LogoAndList = styled.div`
  margin: 0;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  font-family: Work Sans;
  /* display: flex;
  align-items: flex-end; */
`
// const StyledLink = styled(Link)`
  
// `

const ListLink = props => (
  <li style={{ display: `inline`, marginRight: `1rem` }}>
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
            textDecoration: `none`,
            width: `100px`,
            height: `100px`
            
          }}
        >
          <Logo/>
        </Link>
        </div>
        <ul style={{ listStyle: `none`, float: `right`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/report-a-swarm/">Report A Swarm</ListLink>
          <ListLink to="/bab/">Be A Beekeeper</ListLink>
          <ListLink to="/education/">Education</ListLink>
          <ListLink to="/membership/">Membership</ListLink>
      </ul>
      
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
