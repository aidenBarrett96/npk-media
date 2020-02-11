import React, { useState } from "react"
import "./iconBlock.scss"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"
import { useWindowSize } from "../windowSize/windowSize"

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
    threshold: 0.6,
  })

  const desktop = useWindowSize()

  const [showAnimation, setShowAnimation] = useState(false)

  const settingToggle = desktop ? showAnimation : inView

  // Icon 1 animation
  const springOne = useSpring({
    from: {
      opacity: 0,
      top: "-6%",
    },
    ...(settingToggle && {
      to: {
        opacity: 1,
        top: "6%",
      },
    }),
  })

  // Icon 2 animation
  const springTwo = useSpring({
    from: {
      opacity: 0,
      bottom: "40%",
    },
    ...(settingToggle && {
      to: {
        opacity: 1,
        bottom: "28%",
      },
    }),
  })

  // icon 3 Animation
  const springThree = useSpring({
    from: {
      opacity: 0,
      bottom: "14%",
    },
    ...(settingToggle && {
      to: {
        opacity: 1,
        bottom: "2%",
      },
    }),
  })

  return (
    //   Icon area
    <div
      ref={ref}
      className={!variant ? "icon-block" : "icon-block__dark"}
      onMouseOver={() => desktop && setShowAnimation(true)}
    >
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