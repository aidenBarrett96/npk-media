import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Button from "../components/button/button"
import NumberedCard from "../components/numberedCard/numberedCard"
import ProjectCard from "../components/projectCard/projectCard"
import projectImg from "../images/project_image_placeholder.png"
import TeamCard from "../components/teamCard/teamCard"
import SkylineBG from "../components/skylineBg/skylineBg"
import PeakInterest from "../components/peakInterest/peakInterest"
import ContactBlock from "../components/contactBlock/contactBlock"
import "../components/pageStyles/index.scss"
import BaloonAnimation from "../components/animatedComponents/baloon.js"
import IconBlock from "../components/iconBlock/iconBlock"
import cutlery from "../images/cutlery.svg"
import dumbell from "../images/dumbell.svg"
import drink from "../images/drink.svg"
import droplets from "../images/droplets.svg"
import bulb from "../images/bulb.svg"
import plant from "../images/plant.svg"

const IndexPage = () => {
  return (
    <Layout timeBG={true}>
      <SEO title="Home" />

      <Link to="/components">View all components</Link>

      {/* Story section */}
      <section className="story">
        <div className="story-section">
          <h2>
            <strong className="underlined">
              Videography, websites, social media
            </strong>{" "}
            and <strong className="underlined">branding.</strong> All done for
            you. By us.
          </h2>
          <Button color="white">See what we can do</Button>
        </div>

        <BaloonAnimation />

        <div className="story-section">
          <h2>
            We help you <strong>reach potential customers.</strong>
          </h2>
        </div>

        <div className="story-section">
          <h2>
            Based in <strong>Liverpool</strong>, we help companies{" "}
            <strong>throughout the UK</strong> & <strong>worldwide.</strong>
          </h2>
        </div>
      </section>

      <SkylineBG>
        <div className="story-section">
          <h2>
            We produce content <strong>tailor made</strong> for
            <strong>your customers.</strong>
          </h2>
          <h2>
            Making your brand <strong>stand out</strong> to the{" "}
            <strong>people who matter most.</strong>
          </h2>
        </div>
        <IconBlock
          bgColor="white"
          icon1={cutlery}
          icon1Alt="Cutlery icon"
          icon2={dumbell}
          icon2Alt="Dumbell icon"
          icon3={drink}
          icon3Alt="Drink icon"
        >
          <h2>
            Our <strong>research first</strong> approach means we can{" "}
            <strong>target your ideal consumer</strong>, no matter your
            business.
          </h2>
          <Button color="red">See our work</Button>
        </IconBlock>
        <IconBlock
          bgColor="#46444C"
          icon1={droplets}
          icon1Alt="droplets icon"
          icon2={bulb}
          icon2Alt="bulb icon"
          icon3={plant}
          icon2Alt="plant icon"
        ></IconBlock>
      </SkylineBG>
    </Layout>
  )
}

export default IndexPage
