import React from 'react'
import './teamCard.css'

// Team Card component
const TeamCard = ({ image, name, role }) => (
    // Card container
    <div className="card-team">
        {/* Image wrapper */}
        <div className="image-container">
            {/* Image source and alt tag got from props */}
            <img src={image} alt={`${name} profile image`} />
        </div>
        {/* Body of card */}
        <div className="card-team-body">
            {/* Name obtained from props */}
            <h2>{name}</h2>
            {/* Job role obtained through props */}
            <h3>{role}</h3>
        </div>
    </div>
)

export default TeamCard