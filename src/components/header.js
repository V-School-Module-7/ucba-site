import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../components/logo"
import styled from 'styled-components'

const HeaderContainer = styled.header`
  overflow: hidden;
  background-color: #FFFFFF;
  position: fixed;
  top: 0;
  width: 100%;
  height: 150px;
  z-index: 999;
  
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
    background-color: #F5D75F;
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

const Header = ({menuLinks}) => (
  <HeaderContainer>
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
        
        {/* <ul> {menuLinks.map(link => (
          <li 
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >
            <StyledLink to={link.link}>
              {link.name}
              
            </StyledLink>
            </li>
        ))}
          </ul> */}
            
           <StyledLink to="/">Home</StyledLink>
           <StyledLink to="/reportaswarm/">Report A Swarm</StyledLink>
           <StyledLink to="/bab/">Be A Beekeeper</StyledLink>
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
