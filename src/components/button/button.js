import React from 'react'
import './button.css'

// Button component
const Button = ({ onClick, variant, color, children }) => {

    // If colour is red change to our hue of red
    color = color === 'red' ? '#DE4A3F' : color

    // Styles to apply to button depending on props
    const styles = {
        border: `5px solid ${color}`,
        color: color
    }

    return (
        <button className="button" onClick={onClick} style={styles}>
            <span>
            {children}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path fill={color} d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"/></svg>
        </button>
    )
}

export default Button