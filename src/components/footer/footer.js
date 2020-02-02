import React from 'react'
import './footer.scss'

// Footer component
const Footer = () => (
    <footer>
        {/* Links */}
        <ul className="footer-links">
            <li><a>Privacy Policy</a></li>
            <li><a>None Hydro Work</a></li>
            <li><a>Our Hydro Work</a></li>
        </ul>
        {/* Copyright text */}
        <span className="copyright">© NPK Media</span>
    </footer>
)

export default Footer