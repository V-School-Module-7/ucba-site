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
  /* text-decoration: none; */
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

  :visited{
    color: black
  };
  :hover{

  }
  @media (min-width: 500px) {
    
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  
`

const Header = () => (
  <HeaderContainer bgColor="lavender">
    <LogoAndList textDecor="textDecor">
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
      
        <LinkContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/reportaswarm/">Report A Swarm</StyledLink>
          <StyledLink to="/becoming-a-beekeeper/">Be A Beekeeper</StyledLink>
          <StyledLink to="/education/">Education</StyledLink>
          <StyledLink to="/membership/">Membership</StyledLink>
      
          </LinkContainer>
      
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
