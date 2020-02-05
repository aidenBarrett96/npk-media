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
    threshold: 0.7,
  })

  const [reversed, setReversed] = useState(false)

  // Icon 1 animation
  const springOne = useSpring({
    top: !inView ? "6%" : "12%",
    right: !inView ? "65%" : "55%",
    config: {
      friction: 10,
      velocity: 42,
    },
    // onRest: () => setReversed(!reversed),
  })

  // Icon 2 animation
  const springTwo = useSpring({
    bottom: !inView ? "18%" : "24%",
    right: !inView ? "4%" : "10%",
    config: {
      friction: 10,
      velocity: 42,
    },
  })

  // icon 3 Animation
  const springThree = useSpring({
    bottom: !inView ? "2%" : "5%",
    left: !inView ? "6%" : "10%",
    config: {
      friction: 10,
      velocity: 42,
    },
  })

  return (
    //   Icon area
    <div className={!variant ? "icon-block" : "icon-block__dark"}>
      <div className="icons">
        {/* Get icons from props */}
        <img src={icon1} alt={icon1Alt} />
        <img src={icon2} alt={icon2Alt} />
        <img src={icon3} alt={icon3Alt} />
      </div>
      {/* Get body from children prop */}
      <div className="body">{children}</div>
    </div>
  )
}
export default IconBlock
