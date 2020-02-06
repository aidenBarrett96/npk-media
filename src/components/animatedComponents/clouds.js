import React from "react"
import "./clouds.scss"
import cloud1 from "../../assets/story assets/cloud1.svg"
import cloud2 from "../../assets/story assets/cloud2.svg"
import cloud3 from "../../assets/story assets/cloud3.svg"

const Clouds = ({ inView, reversed }) => {
  const cloud1Style = {
    animation: inView
      ? `cloud 12s infinite ${reversed && "reverse"} linear`
      : "",
  }

  const cloud2Style = {
    animation: inView
      ? `cloud 9s infinite ${reversed ? "reverse" : ""} linear 2.4s`
      : "",
  }

  const cloud3Style = {
    animation: inView
      ? `cloud 8s infinite ${reversed && "reverse"} linear 1s`
      : "",
  }
  return (
    <div className="cloud-wrapper">
      <img style={cloud1Style} src={cloud1} alt="cloud" className="cloud1" />
      <img style={cloud2Style} src={cloud2} alt="cloud" className="cloud2" />
      <img style={cloud3Style} src={cloud3} alt="cloud" className="cloud3" />
    </div>
  )
}

export default Clouds
