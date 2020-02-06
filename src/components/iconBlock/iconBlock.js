import React, { useState } from "react"
import "./iconBlock.scss"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

// Icon block component
// Accepts background colour, children, images and image alts as props
const IconBlock = ({
  variant,
  children,
  icon1,
  icon1Alt,
  icon2,
  icon2Alt,
  icon3,
  icon3Alt,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.8,
  })

  // Icon 1 animation
  const springOne = useSpring({
    top: inView ? "3%" : "12%",
    right: inView ? "65%" : "55%",
    transform: `rotate(${inView ? "-15deg" : 0})`,
    config: {
      friction: 12,
    },
  })

  // Icon 2 animation
  const springTwo = useSpring({
    bottom: inView ? "28%" : "32%",
    right: inView ? "0%" : "8%",
    transform: `rotate(${inView ? "10deg" : 0})`,
    config: {
      friction: 12,
    },
  })

  // icon 3 Animation
  const springThree = useSpring({
    bottom: inView ? "2%" : "8%",
    left: inView ? "16%" : "38%",
    transform: `rotate(${inView ? "-18deg" : 0})`,
    config: {
      friction: 12,
    },
  })

  return (
    //   Icon area
    <div ref={ref} className={!variant ? "icon-block" : "icon-block__dark"}>
      <div className="icons">
        {/* Get icons from props */}
        <animated.img style={springOne} src={icon1} alt={icon1Alt} />
        <animated.img style={springTwo} src={icon2} alt={icon2Alt} />
        <animated.img style={springThree} src={icon3} alt={icon3Alt} />
      </div>
      {/* Get body from children prop */}
      <div className="body">{children}</div>
    </div>
  )
}
export default IconBlock
