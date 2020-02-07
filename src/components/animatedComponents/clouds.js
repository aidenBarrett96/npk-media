import React from "react"
import "./clouds.scss"
import cloud1 from "../../assets/story assets/cloud1.svg"
import cloud2 from "../../assets/story assets/cloud2.svg"
import cloud3 from "../../assets/story assets/cloud3.svg"
import { useWindowSize } from "../windowSize/windowSize"

const Clouds = ({ inView, reversed }) => {
  const desktop = useWindowSize()

  const cloud1Style = {
    ...(!desktop && {
      animation: inView
        ? `${reversed ? "cloud-reversed" : "cloud"} 14s infinite linear`
        : "",
    }),
  }

  const cloud2Style = {
    ...(!desktop && {
      animation: inView
        ? `${reversed ? "cloud-reversed" : "cloud"} 9s infinite linear`
        : "",
    }),
  }

  const cloud3Style = {
    ...(!desktop && {
      animation: inView
        ? `${reversed ? "cloud-reversed" : "cloud"} 8s infinite linear`
        : "",
    }),
  }
  return (
    <div className={reversed ? "cloud-wrapper-reversed" : "cloud-wrapper"}>
      <img style={cloud1Style} src={cloud1} alt="cloud" className="cloud1" />
      <img style={cloud2Style} src={cloud2} alt="cloud" className="cloud2" />
      <img style={cloud3Style} src={cloud3} alt="cloud" className="cloud3" />
    </div>
  )
}

export default Clouds
