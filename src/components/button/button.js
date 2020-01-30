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
            {children}
        </button>
    )
}

export default Button