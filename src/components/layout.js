/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from './navbar/Navbar.js'
// import DesktopMenu from './navbar/Desktop/DesktopMenu.js'
import Footer from './Footer'
import "./layout.css"


// Add under links query
// sublinks {
//   name
//   link
// }

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          menuLinks {
            name
            link
            sublinks {
                name
                link
              }
          }
        } 
       }
    }
  `)

  return (
    <>
      <Navbar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>

      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
