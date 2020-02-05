import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../../images/logo.svg"
import "./header.css"
import MenuButton from "../menuButton/menuButton"
import Nav from "../nav/nav"
import { useWindowSize } from "../windowSize/windowSize"

// Header Component
const Header = ({ siteTitle, whiteNav }) => {
  // Sidebar open logic held within state
  const [open, setOpen] = useState(false)
  const desktop = useWindowSize()
  return (
    <header className={whiteNav ? "white-header" : "header"}>
      {/* Home link and logo */}
      <Link to="/" className="logo">
        {/* Logo image */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30.155"
          height="29.938"
          viewBox="0 0 30.155 29.938"
        >
          <g
            id="Group_6"
            data-name="Group 6"
            transform="translate(-348.291 -28.982)"
          >
            <path
              id="Subtraction_1"
              data-name="Subtraction 1"
              d="M363.362,58.92a14.8,14.8,0,0,1-15.071-14.757,15.08,15.08,0,0,1,9.2-13.879c4.887-2.065,9.481-1.662,13.58,1.114a17.552,17.552,0,0,1,6.18,6.908,15.08,15.08,0,0,1-8.022,19.759A14.723,14.723,0,0,1,363.362,58.92Zm0-26.295a11.476,11.476,0,0,0-8.167,3.383c-2.182,2.182-3.624,4.563-3.624,7.648a15.012,15.012,0,0,0,.905,4.4,3.623,3.623,0,0,0,.884.361,4.254,4.254,0,0,0,1.081.133,4.773,4.773,0,0,0,1.285-.168,4.008,4.008,0,0,0,1.024-.446,4.364,4.364,0,0,0,1.376-1.379,5.914,5.914,0,0,0,.664-1.446,3.689,3.689,0,0,0,.172-.817,4.6,4.6,0,0,1,.129-.855,6.355,6.355,0,0,1,.216-.727,5.537,5.537,0,0,1,.365-.8,4.125,4.125,0,0,1,1.32-1.462,3.787,3.787,0,0,1,1.027-.473,4.71,4.71,0,0,1,1.32-.178,5.138,5.138,0,0,1,1.326.164,3.96,3.96,0,0,1,2.4,1.8,5.123,5.123,0,0,1,.387.764,5.707,5.707,0,0,1,.235.707,4.129,4.129,0,0,1,.148.913,4.665,4.665,0,0,0,.12.917,5.543,5.543,0,0,0,.209.711,4.877,4.877,0,0,0,.36.768,3.848,3.848,0,0,0,1.331,1.375,3.993,3.993,0,0,0,1.049.441,5.311,5.311,0,0,0,1.357.166,4.885,4.885,0,0,0,1.088-.117,3.861,3.861,0,0,0,.885-.318,11.539,11.539,0,0,0,.677-3.914,11.207,11.207,0,0,0-3.445-8.024,11.474,11.474,0,0,0-8.106-3.527Zm-1.55,9.406a18.049,18.049,0,0,0,0,4.85s.849-.5,1.9-1.107a21.546,21.546,0,0,0,1.923-1.261,19.477,19.477,0,0,0-1.923-1.28C362.661,42.627,361.812,42.032,361.812,42.032Z"
              transform="translate(0 0)"
              fill={!desktop ? "#46444c" : whiteNav ? "#ffffff" : "#46444c"}
            />
          </g>
        </svg>

        {/* Site title */}
        <span className="logo-title">{siteTitle}</span>
      </Link>

      {/* Menu button shows on small screens */}
      <MenuButton open={open} setOpen={setOpen} />

      {/* Nav */}
      <Nav open={open} setOpen={setOpen} />
    </header>
  )
}

// Acceptable prop types
Header.propTypes = {
  siteTitle: PropTypes.string,
}

// Default props
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
