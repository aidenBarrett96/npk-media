import React from "react"
import "./plane.scss"
import Clouds from "./clouds"
import { useInView } from "react-intersection-observer"
import plane from "../../assets/story assets/plane.svg"
import banner from "../../assets/story assets/banner.svg"

const Plane = () => {
  const [ref, inView] = useInView({
    // threshold: 0.7,
    rootMargin: "200px",
  })

  const flightAnimation = {
    animation: inView ? "flight 1.5s infinite alternate ease-in-out" : "",
  }

  const planeAnimation = {
    animation: inView ? "plane-flow 1.5s infinite alternate ease-in-out" : "",
  }

  const bannerAnimation = {
    animation: inView ? "banner-flow 0.7s infinite alternate ease-in-out" : "",
  }
  return (
    <div ref={ref} className="plane-container">
      <div style={flightAnimation} className="plane-wrapper">
        <img
          style={bannerAnimation}
          src={banner}
          alt="Banner"
          className="banner"
        />
        <img style={planeAnimation} src={plane} alt="Plane" className="plane" />
      </div>
      <Clouds inView={inView} reversed={true} />
    </div>
  )
}

export default Plane
