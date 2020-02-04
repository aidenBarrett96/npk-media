import React from "react"
import "./iconBlock.scss"

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
  // Set background colour from props

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
