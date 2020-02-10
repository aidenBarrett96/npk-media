import React, { useState } from "react"
import "./numberedCard.scss"
import { Link } from "gatsby"

// Numbered Card
const NumberedCard = ({ number, children, show }) => {
  const [open, setOpen] = useState(true)

  return (
    // Card container
    <div className="card-numbered">
      {/* Card label using "number" prop */}
      <span className="card-numbered-label">{number}</span>
      {/* Render children */}
      <div className="inner">{children}</div>
    </div>
  )
}

export default NumberedCard
