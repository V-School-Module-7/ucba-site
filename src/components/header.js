import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../components/logo"

const ListLink = props => (
  <li style={{ display: `inline`,     marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => (
  <header
    style={{
      background: `lavender`,
      // marginBottom: `1.45rem`,
      margin: `0`,
    }}
  >
    <div
      className="logoAndList"
      style={{
        margin: `0`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        fontFamily: `Work Sans`,

      }}
    >
      
        <div
          style={{
            maxWidth: 100, 
            
          }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
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
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
