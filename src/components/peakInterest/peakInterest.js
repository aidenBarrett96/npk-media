import React from "react"
import "./peakInterest.scss"
import { useInView } from "react-intersection-observer"

// Peak interest component
const PeakInterest = ({ text }) => {
  const [ref, inView] = useInView({
    threshold: 0.75,
  })

  const activateAnimation = {
    ...(inView && {
      animation: "line 3.5s infinite ease-in-out",
    }),
  }
  return (
    // Component wrapper
    <div ref={ref} className="peak-interest">
      {/* Text obtained from props */}
      <h4>{text}</h4>
      {/* Interest peaking line */}
      <div className="line-wrapper">
        <div style={activateAnimation} className="line" />
      </div>
    </div>
  )
}

export default PeakInterest
