import React from 'react'
import './button.css'

const Button = ({ onClick, variant, color, children }) => {

    color = color === 'red' ? '#DE4A3F' : color

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