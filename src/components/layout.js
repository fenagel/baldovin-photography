/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/layout.scss"
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, far, fas)

const Layout = ({ children }) => {
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
        <Navbar />
        <main className="global-grid">
          {children}
        </main>
        <footer className="footer">
          <div className="footer__socials">
            <a href="#" className="footer__social">
              <FontAwesomeIcon icon={["fab", 'instagram']} />
            </a>
            <a href="#" className="footer__social">
              <FontAwesomeIcon icon={["far", 'envelope']} />
            </a>
          </div>
          <div className="footer__copyright">Copyright © {new Date().getFullYear()} All rights reserved.</div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
