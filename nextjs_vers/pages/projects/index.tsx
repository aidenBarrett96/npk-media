import Link from "next/link"
import Layout from "../../components/layout/Layout"
import { storyblok } from "../../utils/storyblok/storyblok"

const Projects = ({ data: story }) => {
  if(!story) return null
  const {...rest} = story


  return (
    <Layout>
      <h1>page content</h1>
      {rest.data.stories.map((project) => (
        <div key={project.name}>
          <Link href={`projects/${project.slug}`}>
            <a>{project.name}</a>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default Projects


export async function getStaticProps() {
  const allProjects = await storyblok.get('cdn/stories?starts_with=projects/', {version: 'draft'})

  return {
    props: {
      data: allProjects
    }
  }
}