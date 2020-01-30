import React from 'react'
import './teamCard.css'

const TeamCard = ({ image, name, role }) => (
    <div className="card-team">
        <div className="image-container">
            <img src={image} alt={`${name} profile image`} />
        </div>
        <div className="card-team-body">
            <h2>{name}</h2>
            <h3>{role}</h3>
        </div>
    </div>
)

export default TeamCard