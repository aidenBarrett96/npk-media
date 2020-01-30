import React from 'react'
import './numberedCard.css'
import { Link } from 'gatsby'

// Numbered Card
const NumberedCard = ({ number, children }) => {
    return (
        // Card container
        <div className="card-numbered">
            {/* Card label using "number" prop */}
            <span className="card-numbered-label">{number}</span>
            {/* Render children */}
            {children}
        </div>
    )
}

export default NumberedCard
