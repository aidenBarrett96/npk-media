import { ComponentArray } from "../../components/components"
import Layout from "../../components/layout/layout"
import { storyblok } from "../../utils/storyblok/storyblok"
import ContentWithImages from '../../components/utilities/contentWithImages'

const ProjectsPages = ({ data: story }) => {
  if(!story) return null
  const {...rest} = story

  console.log(story)


  return (
    <Layout>
      <section>
        <img src={rest.content.featured_media.filename} alt={rest.content.featured_media.alt} />
        <h1>{rest.content.project_title}</h1>
        <p>{rest.type_of_work || '*project tags here* need adding on cms'}</p>
        {/* <ContentWithImages props={story}/> */}
      </section>
      
      <section>
        <h2>The problem</h2>
        <p>{rest.content.problem}</p>
        <h2>The solution</h2>
        <p>{rest.content.solution}</p>
      </section>

      <section>
        Other content (reviews and 2 image sections), needs components
      </section>

      <section>
        {rest.content.internal_link.map((link) => (
          <div>
            <h3>{link.title}</h3>
            
          </div>
        ))}
      </section>
    </Layout>
  )
}
export default ProjectsPages



// query cms for all stories in 
export async function getStaticPaths() {
  const res = await storyblok.get('cdn/stories?starts_with=projects/', { 
    version: 'draft',
    filter_query:{ 
     component: { 
       eq: 'page' 
      } 
    }
  })


  const {data: {stories}} = res
  const paths = stories.map(({slug}) => (
    {
      params: {
        slug
      }
    }
  ))
    // console.log(paths)
    console.log({stories})
  return {
    paths,
    fallback: false
  }
}

// get project data from cms by slug
export async function getStaticProps({ params }) {
  const res = await storyblok.get(`cdn/stories/projects/${params.slug}`, {version: 'draft'})
  return {
    props: {
      data: res?.data?.story
    }
  }
}