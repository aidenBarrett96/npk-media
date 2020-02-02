import React from 'react'
import skyline from '../../images/skyline.svg'
import './skylineBg.scss'


// Skyline component 
const SkylineBG = ({ children }) => {
    return (
        // Skyline div container
        <div className="skyline-section">
            {/* Skyline image wrapper */}
            <div className="image-container">
                {/* Skyline image */}
                <img src={skyline} alt="liverpool skyline" />
            </div>
            {/* Component inner */}
            <div className="skyline-section-inner">
                {/* Render children from props */}
                {children}
            </div>
        </div>
    )
}

export default SkylineBG