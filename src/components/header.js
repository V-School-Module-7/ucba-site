import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lavender`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <ul style={{ listStyle: `none`, float: `right`}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/report-a-swarm/">Report A Swarm</ListLink>
        <ListLink to="/bab/">Be A Beekeeper</ListLink>
        <ListLink to="/education/">Education</ListLink>
        <ListLink to="/membership/">Membership</ListLink>
      </ul>
      </h1>
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
