import Layout from "../../layout/layout"
import { storyblok } from "../../utils/storyblok/storyblok"
import style from './project.module.scss'
import CircleLinkWithCaption from "../../components/utilities/circleLinkWithCaption"
import Testimonial from "../../components/utilities/testimonial"


const ProjectsPages = ({ data: story }) => {
  if(!story) return null
  const {...rest} = story

  // extract the data for 2 components so it's tidier
  const nextProject = rest.content.internal_link && rest.content.internal_link[0] || null
  const testimonial = rest.content.testimonial && rest.content.testimonial[0] || null


  return (
    <Layout>
      <div className={style.hero}>
        <img src={story.content.featured_media.filename} alt={story.content.featured_media.alt}/>
        <h1>{story.content.project_title}</h1>
        <p>project tags. need to setup in cms</p>
      </div>

      <div className={style.intro}>
        <h2>The Problem</h2>
        <p>{story.content.problem}</p>
        <h2>The Solution</h2>
        <p>{story.content.solution}</p>
      </div>


      {/* <ContentWithImages/> */}

      <Testimonial 
        company={testimonial.company}
        name={testimonial.name}
        quote={testimonial.quote}
        role={testimonial.role}
      />
      
      <CircleLinkWithCaption
        link={nextProject.link}
        button_text={nextProject.button_text}
        title={nextProject.title}
      />


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