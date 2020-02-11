import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Button from '../components/button/button'
import NumberedCard from '../components/numberedCard/numberedCard'
import ProjectCard from '../components/projectCard/projectCard'
import projectImg from '../images/project_image_placeholder.png'
import TeamCard from '../components/teamCard/teamCard'
import SkylineBG from '../components/skylineBg/skylineBg'
import PeakInterest from '../components/peakInterest/peakInterest'
import ContactBlock from '../components/contactBlock/contactBlock'

const ComponentsPage = () => {

  return (
    <Layout timeBG={true}>
      <SEO title="Home" />

      {/* Buttons */}
      <section style={{
        padding: '20px',
      }}>
        <h1>Buttons</h1>
        <div style={{ padding: '50px', background: 'black', width: 'auto' }}>
          <Button color="white" variant="primary">White</Button> <br />
        </div>
        <Button color="red" variant="alternate">Red</Button> <br />
        <Button color="black" variant="alternate">Black</Button> <br />
      </section>

      <PeakInterest text="Numbered cards below" />

      {/* Numbered Cards */}
      <section
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          margin: '20px 0',
          overflow: 'scroll',
          boxSizing: 'border-box'
        }}>
        <NumberedCard number={1}>
          <h2>Pre-Production</h2>
          <p>We deliver professionally produced videos for product promotion, social media campaigns and television. Our productions offer your sutlers a fresh way to interact with your brand.</p>
        </NumberedCard>
        <NumberedCard number={2}>
          <h2>Pre-Production</h2>
          <p>We deliver professionally produced videos for product promotion, social media campaigns and television. Our productions offer your sutlers a fresh way to interact with your brand.</p>
        </NumberedCard>
      </section>

      <PeakInterest text="Project cards below" />

      {/* Project cards */}
      <section style={{ padding: '50px' }}>
        <ProjectCard
          title="Mills Autopot Video 2019"
          description="A video to remember the incredible acts who performed for Mills at the Autopot summer social."
          client="Mills"
          image={projectImg}
        />
      </section>

      <PeakInterest text="Team Cards" />

      {/* Team cards */}
      <section style={{ padding: '50px' }}>
        <h1>Team Cards</h1>
        <TeamCard name="Aiden Barrett" image={projectImg} role="Software Engineer" />
      </section>

      <PeakInterest text="Skyline Background" />

      {/* Skyline background */}
      <SkylineBG>
        <h1>Hello World</h1>
        <h2>Hello there</h2>
        <h2>Hello you</h2>
      </SkylineBG>

      <PeakInterest text="Contact Block" />

      {/* Contact block */}
      <ContactBlock />
    </Layout >
  )
}

export default ComponentsPage