import { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import {storyblok} from '../utils/storyblok/storyblok'
import {storyblokStory} from '../types/storyblok'
import style from './homepage.module.scss'
import Link from "next/link"
import AnimatedStory from "../components/utilities/animatedStory/animatedStory"
import animOne from '../assets/page-assets/home/animations/1-bridge-home-split.json'
import animTwo from '../assets/page-assets/home/animations/2-bridge-home-split.json'
import animThree from '../assets/page-assets/home/animations/3-loop-home.json'
import LatestProjects from '../components/utilities/latestProjects'
import CircleLinkWithCaption from '../components/utilities/circleLinkWithCaption'

const animations = [animOne, animTwo, animThree]
const animationButtons = {
  entryStage: 1,
  data: [
    {
      text: 'Videos',
      link: '/videos',
      large: false
    },
    {
      text: 'Websites',
      link: '/websites',
      large: false
    },
    {
      text: 'Social Media',
      link: '/social-media',
      large: false,
    }
  ]
}

const testanim = animations
console.log(testanim)

const HomePage = ({ data: story }) => {
// Set the type for the story and extract nessesary data
  const {...rest}: storyblokStory = story

  return (
    <Layout>
      <section className={style.storySection}>
        <h1>All in one media agency.</h1>
        <h2>
          We elevate your brand with our expertise in&nbsp;
          <Link href="/videos"><a>video</a></Link>, <Link href="/websites"><a>websites</a></Link> and <Link href="/social-media"><a>social media</a></Link>
        </h2>
        {/* <AnimatedStory 
          animations={animations}
          buttons={animationButtons}
          autoplay={true}
        /> */}
      </section>
       
      <section>
        <LatestProjects projects={story.data.stories} />
      </section>

      <section>
        <h3>review section (need to make)</h3>
      </section>

      <section>
        <CircleLinkWithCaption
          text='Know what you want?'
          link={{
            url: '/contact',
            text: 'Get in touch',
            large: true,
          }}
        />
      </section>
    </Layout>
  )
}
export default HomePage

// Query to get data from cms
export const getStaticProps = async () => {
  // Query for data
  const res = await storyblok.get('cdn/stories?starts_with=projects/', {version: 'draft'})

  return {
    props: {
      data: res
    }
  }
}

