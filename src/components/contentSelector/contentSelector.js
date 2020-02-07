import React, { useState } from "react"
import "contentSelector.scss"

const ContentSelector = () => {
  const [content, setContent] = useState("Videography")

  return (
    <div className="content-selector">
      {/* Get links from inner sections */}
      <ul>
        <li>
          <button>Videography</button>
        </li>
        <li>
          <button>Websites</button>
        </li>
        <li>
          <button>Social Media</button>
        </li>
        <li>
          <button>Branding</button>
        </li>
      </ul>

      <div>{/* Relevant content */}
      {content === "Videography" && }
      </div>
    </div>
  )
}

const content = ({section}) => {
    return (
        <div/>
    )
}