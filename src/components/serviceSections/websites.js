import React from "react"
import PeakInterest from "../peakInterest/peakInterest"
import NumberedCard from "../numberedCard/numberedCard"
import ProjectCard from "../projectCard/projectCard"
import website from "../../assets/story assets/service icons/website icon.svg"
import plus from "../../assets/story assets/story icons/plus.svg"
import projectImg from "../../images/project_image_placeholder.png"
import ContactBlock from "../contactBlock/contactBlock"
import { useWindowSize } from "../windowSize/windowSize"

const WebsiteSection = () => {
  // Extract logic for whether user is viewing on small or large screen into local variable
  const desktop = useWindowSize()
  return (
    <div className="service-section">
      <div className="two-columns__large">
        <img className="icon" src={website} alt="Website icon" />
        <h2>
          Our <strong>in-house design and development team</strong> deliver an{" "}
          <strong>exciting experience </strong>
          to give your customers the <strong> best first impression.</strong>
        </h2>
        <PeakInterest text="How will they help my company?" />
      </div>

      <div className="two-columns__large">
        <img className="icon" src={plus} alt="Plus sign" />
        <div>
          <h2>
            Improve <strong>search ranking</strong>, give your business an{" "}
            <strong>engaging online presence</strong> with bespoke features just
            for you.
          </h2>
        </div>
        <PeakInterest text="Whats the proccess?" />
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

export default WebsiteSection
