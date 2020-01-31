import React from 'react'
import skyline from '../../images/skyline.svg'
import './skylineBg.css'

const SkylineBG = ({children}) => {
    return (
        <div className="skyline-section">
            <div className="image-container">
                <img src={skyline} alt="liverpool skyline" />
                </div>
                <div className="skyline-section-inner">
                    {children}
                    </div>
            </div>
    )
}

export default SkylineBG