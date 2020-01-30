import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Button from '../components/button/button'
import { NumberedCard } from '../components/cards/cards'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>
    <section style={{
      background: 'blue',
      padding: '20px',
      margin: '20px 0'
    }}>
      <h1>Buttons</h1>
      <Button color="white" variant="primary">White</Button> <br />
      <Button color="red" variant="alternate">Red</Button> <br />
      <Button color="black" variant="alternate">Black</Button> <br />
    </section>
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
      <h1>Numbered Cards</h1>
      <NumberedCard number={1}>
        <h2>Pre-Production</h2>
        <p>We deliver professionally produced videos for product promotion, social media campaigns and television. Our productions offer your sutlers a fresh way to interact with your brand.</p>
      </NumberedCard>
      <NumberedCard number={2}>
        <h2>Pre-Production</h2>
        <p>We deliver professionally produced videos for product promotion, social media campaigns and television. Our productions offer your sutlers a fresh way to interact with your brand.</p>
      </NumberedCard>
    </section>
  </Layout>
)

export default IndexPage
