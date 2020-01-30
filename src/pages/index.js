import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Button from '../components/button/button'
import NumberedCard from '../components/numberedCard/numberedCard'
import ProjectCard from '../components/projectCard/projectCard'
import projectImg from '../images/project_image_placeholder.png'
import TeamCard from '../components/teamCard/teamCard'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>

    {/* Buttons */}
    <section style={{
      padding: '20px',
      margin: '20px 0'
    }}>
      <h1>Buttons</h1>
      <div style={{ padding: '50px', background: 'black', width: 'auto' }}>
        <Button color="white" variant="primary">White</Button> <br />
      </div>
      <Button color="red" variant="alternate">Red</Button> <br />
      <Button color="black" variant="alternate">Black</Button> <br />
    </section>

    <hr />

    {/* Numbered Cards */}
    <h1>Numbered Cards</h1>
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

    <hr />

    {/* Project cards */}
    <section style={{ padding: '50px' }}>
      <h1>Project Cards</h1>
      <ProjectCard
        title="Mills Autopot Video 2019"
        description="A video to remember the incredible acts who performed for Mills at the Autopot summer social."
        client="Mills"
        image={projectImg}
      />
    </section>

    <hr />

    {/* Team cards */}
    <section style={{ padding: '50px' }}>
      <h1>Team Cards</h1>
      <TeamCard name="Aiden Barrett" image={projectImg} role="Software Engineer" />
    </section>
  </Layout>
)

export default IndexPage
