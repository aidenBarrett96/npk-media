/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import TimeBG from "../timeBg/timeBg"
import Header from "../header/header"
import "./layout.scss"
import Footer from "../footer/footer"

// Global layout component
const Layout = ({ children, timeBG, mainClass }) => {
  // Query metadata the site title
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* Header component */}
      <Header siteTitle={data.site.siteMetadata.title} whiteNav={timeBG} />
      {/* Main content */}
      <main className={mainClass}>
        {timeBG ? <TimeBG>{children}</TimeBG> : children}
      </main>
      {/* Footer section */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
