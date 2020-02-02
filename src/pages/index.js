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
import '../components/pageStyles/index.scss'

const IndexPage = () => {

  return (
    <Layout timeBG={true}>
      <SEO title="Home" />

      <Link to="/components">View all components</Link>

      {/* Story section */}
      <section className="story">

        <div className="story-section">
          <h2><strong className="underlined">Videography, websites, social media</strong> and <strong className="underlined">branding.</strong> All done for you. By us.</h2>
          <Button color="white">SEE WHAT WE CAN DO</Button>
        </div>

        <div className="story-section">
          <h2>We help you <strong>reach potential customers.</strong></h2>
        </div>

        <div className="story-section">
          <h2>Based in <strong>Liverpool</strong>, we help companies <strong>throughout the UK</strong> & <strong>worldwide.</strong></h2>
        </div>

      </section>

      <SkylineBG>

      </SkylineBG>
    </Layout >
  )
}

export default IndexPage
