import React from 'react'
import './menuButton.css'

const MenuButton = ({ open, setOpen }) => (
    <button className="menu-button" onClick={() => setOpen(open ? false : true)}>{open ? 'Close' : 'Menu'}<span /></button>
)

export default MenuButton