import React from 'react'
import './nav.css'
import { Link } from "gatsby"

// Nav component
const Nav = ({ open }) => {

    // Change styles depending on props
    const styles = {
        transform: `translateY(-${open ? 0 : 40}px)`,
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden'
    }

    return (
        // Links inside an unordered list
        <ul className="nav" style={styles}>
            <li className="nav-link">
                <Link to="/" activeClassName="nav-link-active">Home<span /></Link>
            </li>
            <li className="nav-link">
                <Link to="/story" activeClassName="nav-link-active">Our Story<span /></Link>
            </li>
            <li className="nav-link">
                <Link to="/work" activeClassName="nav-link-active">Our Work<span /></Link>
            </li>
            <li className="nav-link">
                <Link to="/team" activeClassName="nav-link-active">Our Team<span /></Link>
            </li>
            <li className="nav-link">
                <Link to="/services" activeClassName="nav-link-active">Our Services<span /></Link>
            </li>
            <li className="nav-link">
                <Link to="/contact" activeClassName="nav-link-active" style={{ color: '#DE4A3F' }}>Get In Touch<span /></Link>
            </li>
        </ul>
    )
}

export default Nav