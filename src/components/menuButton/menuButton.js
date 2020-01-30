import React from 'react'
import './menuButton.css'

// Menu button for header
const MenuButton = ({ open, setOpen }) => (
    <button className="menu-button" onClick={() => setOpen(open ? false : true)}>{open ? 'Close' : 'Menu'}<span /></button>
)

export default MenuButton