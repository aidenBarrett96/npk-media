import React, { useState } from "react"
import Layout from "../components/layout/layout"
import ContactBlock from "../components/contactBlock/contactBlock"
import VideographySection from "../components/serviceSections/videography"
import WebsiteSection from "../components/serviceSections/websites"
import SocialMediaSection from "../components/serviceSections/socialMedia"
import BrandingSection from "../components/serviceSections/branding"
import SEO from "../components/seo"
import "../components/pageStyles/services.scss"

const ServicesPage = () => {
  const [service, setService] = useState("Videography")

  const activeStyle = {
    fontWeight: "bold",
    color: "#de4a3f",
  }
  return (
    <Layout pageTitle="Services" mainClass="services-page">
      <SEO title="services" />
      <ul className="content-selector">
        <li>
          <button
            onClick={() => setService("Videography")}
            className="button__nostyle"
            style={service === "Videography" ? activeStyle : {}}
          >
            Videography
          </button>
        </li>
        <li>
          <button
            onClick={() => setService("Websites")}
            className="button__nostyle"
            style={service === "Websites" ? activeStyle : {}}
          >
            Websites
          </button>
        </li>
        <li>
          <button
            onClick={() => setService("Social Media")}
            className="button__nostyle"
            style={service === "Social Media" ? activeStyle : {}}
          >
            Social Media
          </button>
        </li>
        <li>
          <button
            onClick={() => setService("Branding")}
            className="button__nostyle"
            {...(service === "Branding")}
            style={service === "Branding" ? activeStyle : {}}
          >
            Branding
          </button>
        </li>
      </ul>
      <section>
        {service === "Videography" && <VideographySection />}
        {service === "Websites" && <WebsiteSection />}
        {service === "Social Media" && <SocialMediaSection />}
        {service === "Branding" && <BrandingSection />}
      </section>
    </Layout>
  )
}

export default ServicesPage
