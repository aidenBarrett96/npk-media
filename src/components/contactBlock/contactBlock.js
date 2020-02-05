import React, { useState } from "react"
import "./contactBlock.scss"
import Button from "../button/button"
import telephone from "../../assets/story icons/phone npk.svg"
import logoLineDrawing from "../../images/logo-line-drawing.svg"
import email from "../../assets/story icons/letter.svg"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

// Contact block component
const ContactBlock = () => {
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
    // contact block wrapper
    <animated.div ref={ref} className="contact-block">
      {/* Inner text wrapper */}
      <div className="contact-block-body">
        <h2>
          Get <strong>in touch.</strong>
        </h2>
        <p>
          Anybody home? Drop us a line and we’ll get back to you within a day.
        </p>
        <Button color="red">Let's Colaborate</Button>
      </div>
      {/* Icons section */}
      <div className="icons-section">
        <animated.img
          style={springOne}
          src={email}
          alt="Email line drawing icon"
        />
        <animated.img
          style={springTwo}
          src={logoLineDrawing}
          alt="Logo line drawing icon"
        />
        <animated.img
          style={springThree}
          src={telephone}
          alt="Telephone line drawing icon"
        />
      </div>
    </animated.div>
  )
}

export default ContactBlock
