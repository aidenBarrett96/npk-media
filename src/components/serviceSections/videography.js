import React from "react"
import PeakInterest from "../peakInterest"
import Button from "../button/button"
import NumberedCard from "../numberedCard/numberedCard"
import camera from "../../assets/story assets/service icons/video icon.svg"
import camera from "../../assets/story assets/story icons/plus.svg"
import projectImg from "../images/project_image_placeholder.png"

const Videography = () => (
  <div className="service--videography">
    <div className="two-columns__large">
      <img src={camera} alt="camera" />
      <h2>
        Our <strong>professional videos</strong> offer you a fresh way to{" "}
        <strong>interact with your customers.</strong>
      </h2>
      <PeakInterest text="How will they help my company?" />
    </div>

    <div className="two-columns__large">
      <img src={plus} alt="Plus sign" />
      <div>
        <h2>
          This allows you to <strong>reach a bigger audience</strong> through
          video based channels like instagram stories.
        </h2>
        <Button color="red">View proccess</Button>
      </div>
    </div>

    {/* Proccesses */}
    <div className="Proccess">
      <h3>Proccess</h3>
      <NumberedCard number={1}>
        <h2>Pre-Production</h2>
        <p>
          We deliver professionally produced videos for product promotion,
          social media campaigns and television. Our productions offer your
          sutlers a fresh way to interact with your brand.
        </p>
      </NumberedCard>
      <PeakInterest text="Can I see an example?" />
    </div>

    {/* Recent relevant jobs */}
    {/* Add query to back end in future */}
    <ProjectCard
      title="Mills Autopot Video 2019"
      description="A video to remember the incredible acts who performed for Mills at the Autopot summer social."
      client="Mills"
      image={projectImg}
    />
  </div>
)

export default Videography
