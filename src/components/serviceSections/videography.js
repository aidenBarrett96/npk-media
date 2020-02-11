import React from "react"
import PeakInterest from "../peakInterest/peakInterest"
import NumberedCard from "../numberedCard/numberedCard"
import ProjectCard from "../projectCard/projectCard"
import ContactBlock from "../contactBlock/contactBlock"
import camera from "../../assets/story assets/service icons/video icon.svg"
import plus from "../../assets/story assets/story icons/plus.svg"
import projectImg from "../../images/project_image_placeholder.png"
import "./serviceSection.scss"
import { useWindowSize } from "../windowSize/windowSize"

const Videography = () => {
  const desktop = useWindowSize()

  return (
    <div className="service-section">
      <div className="two-columns__large">
        <img className="icon" src={camera} alt="camera" />
        <h2>
          Our <strong>professional videos</strong> offer you a fresh way to{" "}
          <strong>interact with your customers.</strong>
        </h2>
        <PeakInterest text="How will they help my company?" />
      </div>

      <div className="two-columns__large">
        <img className="icon" src={plus} alt="Plus sign" />
        <div>
          <h2>
            This allows you to <strong>reach a bigger audience</strong> through
            video based channels like instagram stories.
          </h2>
        </div>
        <PeakInterest text="Whats the process?" />
      </div>

      {/* Proccesses */}
      <div className="process">
        <h2>Proccess</h2>
        <div className="inner">
          <NumberedCard number={1}>
            <h2>Pre-Production</h2>
            <p>
              We deliver professionally produced videos for product promotion,
              social media campaigns and television. Our productions offer your
              sutlers a fresh way to interact with your brand.
            </p>
          </NumberedCard>
          <NumberedCard number={2}>
            <h2>Production</h2>
            <p>
              We deliver professionally produced videos for product promotion,
              social media campaigns and television. Our productions offer your
              sutlers a fresh way to interact with your brand.
            </p>
          </NumberedCard>
          <NumberedCard number={3}>
            <h2>Post-Production</h2>
            <p>
              We deliver professionally produced videos for product promotion,
              social media campaigns and television. Our productions offer your
              sutlers a fresh way to interact with your brand.
            </p>
          </NumberedCard>
        </div>
        <PeakInterest text="Can I see an example?" />
      </div>

      {/* Recent relevant jobs */}
      {/* Add query to back end in future */}
      <div className="projects">
        <h2>Projects</h2>
        <div className="inner">
          <ProjectCard
            title="Mills Autopot Video 2019"
            description="A video to remember the incredible acts who performed for Mills at the Autopot summer social."
            client="Mills"
            image={projectImg}
          />
          <ProjectCard
            title="Mills Autopot Video 2019"
            description="A video to remember the incredible acts who performed for Mills at the Autopot summer social."
            client="Mills"
            image={projectImg}
          />
          {!desktop && (
            <ProjectCard
              title="Mills Autopot Video 2019"
              description="A video to remember the incredible acts who performed for Mills at the Autopot summer social."
              client="Mills"
              image={projectImg}
            />
          )}
        </div>
        <PeakInterest text="How can I get in touch?" />
      </div>
      <ContactBlock />
    </div>
  )
}

export default Videography
