import React, { useState } from 'react'

// Time Background
const TimeBG = ({ children }) => {
    const date = new Date()
    const time = date.getHours()


    let bg = ''

    if (time < 5 || time >= 21) {
        // night
        bg = 'linear-gradient(#120e1d 0%, #1f2346 33.99%, #356f66 70.44%, #fff 100%)'
    } else if (5 <= time && time < 8 || time >= 17 && time < 21) {
        // morning
        bg = 'linear-gradient(#25174d 0%, #b11212 33.99%, #dd8439 70.44%, #fff 100%)'
    } else if (time >= 8 && time < 17) {
        // day
        bg = 'linear-gradient(#3e2689 0%, #15b7c4 33.99%, #dbf4ff 70.44%, #fff 100%)'
    }

    const styles = {
        background: bg,
        marginTop: '-80px',
        paddingTop: '80px'
    }

    return (
        <div className="time-bg" style={styles}>
            {children}
        </div>
    )
}

export default TimeBG