import Link from "next/link"
import Layout from "../../components/layout/Layout"
import { storyblok } from "../../utils/storyblok/storyblok"

const Projects = ({ data: story }) => {
  if(!story) return null
  
  return (
    <Layout>
      <h1>page content</h1>
      <ProjectLinks data={story}/>
    </Layout>
  )
}

export default Projects


// get all projects data from cms
export async function getStaticProps() {
  const allProjects = await storyblok.get('cdn/stories?starts_with=projects/', {version: 'draft'})

  return {
    props: {
      data: allProjects
    }
  }
}

// component to map out data
const ProjectLinks = ({data: story}) => {
  const {...rest} = story

  return (
    <>
      {rest.data.stories.map((project) => (
        <div key={project.name}>
          <Link href={`/projects/${project.slug}`}>
            <a>{project.name}</a>
          </Link>
        </div>
      ))}
    </>
  )
}