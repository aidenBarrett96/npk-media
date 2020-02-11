import React from "react"
import Layout from "../components/layout/layout"
import TeamCard from "../components/teamCard/teamCard"

const TeamPage = () => {
  return (
    <Layout mainClass="team-page">
      <h2>
        Our team consists of incredible individual <strong>talents</strong>{" "}
        which combine to create <strong>beautiful content.</strong>
      </h2>
      <section className="team">
        <TeamCard name="Stephen Brookes" role="Managing Director" />
        <TeamCard name="Joshua Terry" role="Project Manager" />
        <TeamCard name="Aiden Barrett" role="Software Engineer" />
        <TeamCard name="Darragh Mckeogh" role="UX/ UI Designer" />
        <TeamCard name="Luke Sparrowhawk" role="Videographer" />
        <TeamCard name="Piara O'keefe" role="Photographer" />
        <TeamCard name="Coatsy" role="Music Producer" />
      </section>
    </Layout>
  )
}

export default TeamPage
