import Layout from "../layout/layout"
import {storyblok} from '../utils/storyblok/storyblok'
import {storyblokStory} from '../types/storyblok'
import style from './homepage.module.scss'
import Link from "next/link"
import { ComponentArray } from "../components/components"


const HomePage = ({ data: story }) => {
// Set the type for the story and extract nessesary data
  const {...rest}: storyblokStory = story


  console.log(story)

  
  return (
    <Layout>
      <section className={style.storySection}>
        <h1>All in one media agency.</h1>
        <h2>
          We elevate your brand with our expertise in&nbsp;
          <Link href="/videos"><a>video</a></Link>, <Link href="/websites"><a>websites</a></Link> and <Link href="/social-media"><a>social media</a></Link>
        </h2>
      </section>
        
      <section>
        <ComponentArray components={story.data.story.content.body} />
      </section>

    </Layout>
  )
}
export default HomePage



// Query to get data from cms
export const getStaticProps = async () => {
  // Query for data
  const res = await storyblok.get('cdn/stories/home', {version: 'draft'})
  
  return {
    props: {
      data: res
    }
  }
}

