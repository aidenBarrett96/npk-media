import React from 'react'
import './cards.css'

export const NumberedCard = ({ number, children }) => {
    return (
        <div className="card-numbered">
            <span className="card-numbered-label">{number}</span>
            {children}
        </div>
    )
}