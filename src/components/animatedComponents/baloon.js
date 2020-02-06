import React from "react"
import balloon from "../../assets/story assets/balloon.svg"
import cloud1 from "../../assets/story assets/cloud1.svg"
import cloud2 from "../../assets/story assets/cloud2.svg"
import cloud3 from "../../assets/story assets/cloud3.svg"
import platform from "../../assets/story assets/icon platform.svg"
import "./balloon.scss"
import { useInView } from "react-intersection-observer"

const BaloonAnimation = () => {
  const [ref, inView] = useInView({
    // threshold: 0.7,
    rootMargin: "60px",
  })

  return (
    <div ref={ref} className="balloon-container">
      <div className="balloon-wrapper">
        <img src={balloon} alt="Air baloon" className="balloon" />
        <img src={platform} alt="Air baloon platform" className="platform" />
      </div>
      <div className="cloud-wrapper">
        <img src={cloud1} alt="cloud" className="cloud1" />
        <img src={cloud2} alt="cloud" className="cloud2" />
        <img src={cloud3} alt="cloud" className="cloud3" />
      </div>
    </div>
  )
}

export default BaloonAnimation
