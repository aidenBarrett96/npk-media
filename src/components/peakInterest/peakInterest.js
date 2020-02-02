import React from 'react'
import './peakInterest.scss'

// Peak interest component 
const PeakInterest = ({ text }) => (
    // Component wrapper
    <div className="peak-interest">
        {/* Text obtained from props */}
        <h4>{text}</h4>
        {/* Interest peaking line */}
        <div className="line" />
    </div>
)

export default PeakInterest