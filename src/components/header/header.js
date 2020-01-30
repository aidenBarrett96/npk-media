import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from '../../images/logo.svg'
import './header.css'
import MenuButton from '../menuButton/menuButton'
import Nav from '../nav/nav'

// Header Component
const Header = ({ siteTitle }) => {
  // Sidebar open logic held within state
  const [open, setOpen] = useState(false)

  return (
    <header>
      {/* Home link and logo */}
      <Link to="/" className="logo">
        <img alt="NPK Media Logo" src={logo} />
        <span className="logo-title">
          {siteTitle}
        </span>
      </Link>

      {/* Menu button shows on small screens */}
      <MenuButton open={open} setOpen={setOpen} />

      {/* Nav */}
      <Nav open={open} setOpen={setOpen} />
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
