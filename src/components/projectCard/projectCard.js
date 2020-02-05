import React from "react"
import "./projectCard.css"
import { Link } from "gatsby"
import { useWindowSize } from "../windowSize/windowSize"

// Project card
const ProjectCard = ({ title, description, client, image, link }) => {
  // Extract client width into a local variable
  const [width] = useWindowSize()
  const desktop = useWindowSize()
  return (
    // Card container
    <div className="card-project">
      {/* Image wrapper */}
      <div className="image-container">
        <img src={image} alt={`${title} Image`} />
      </div>
      {/* Card body & text */}
      <div className="card-project-body">
        {/* Show client either below or above title depending on client width */}
        {!desktop && <h4>{client}</h4>}
        <h2>{title}</h2>
        {!desktop && <h4>{client}</h4>}
        <p>{description}</p>
        {/* Add a spacer to align link to bottom on large screens */}
        {!desktop && <span style={{ flex: 1 }} />}
        <Link to={link}>
          View Project
          <span />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
