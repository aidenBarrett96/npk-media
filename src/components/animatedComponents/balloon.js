import React from "react"
import balloon from "../../assets/story assets/balloon.svg"
import platform from "../../assets/story assets/icon platform.svg"
import "./balloon.scss"
import { useInView } from "react-intersection-observer"
import Clouds from "./clouds"

const BaloonAnimation = () => {
  const [ref, inView] = useInView({
    // threshold: 0.7,
    rootMargin: "60px",
  })

  const platformStyle = {
    animation: inView ? "swing 1.2s infinite alternate ease-in-out" : "",
  }

  return (
    <div ref={ref} className="balloon-container">
      <div className="balloon-wrapper">
        <img src={balloon} alt="Air baloon" className="balloon" />
        <img
          style={platformStyle}
          src={platform}
          alt="Air baloon platform"
          className="platform"
        />
      </div>
      <Clouds inView={inView} />
    </div>
  )
}

export default BaloonAnimation
