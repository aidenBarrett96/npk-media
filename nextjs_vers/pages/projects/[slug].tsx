import Layout from "../../layout/layout"
import { storyblok } from "../../utils/storyblok/storyblok"
import style from './project.module.scss'
import CircleLinkWithCaption from "../../components/utilities/circleLinkWithCaption"
import Testimonial from "../../components/utilities/testimonial"
import ContactSection from "../../components/utilities/contactSection"
import FullWidthGallery from "../../components/utilities/fullWidthGallery"
import TwoColumnGallery from "../../components/utilities/twoColumnGallery"


const ProjectsPages = ({ data: story }) => {
  if(!story) return null
  const {...rest} = story

  // extract the data for components
  const nextProject = rest.content.internal_link && rest.content.internal_link[0] || null
  const testimonial = rest.content.testimonial && rest.content.testimonial[0] || null
  const fullGal = rest.content.content_section.find(nameIs => nameIs.component === 'full_width_gallery');
  const twoColGal = rest.content.content_section.find(nameIs => nameIs.component === '2_column_gallery');


  console.log('stuff;;;;', fullGal)


  return (
    <Layout>
      <div className={style.hero}>
        <img src={story.content.featured_media.filename} alt={story.content.featured_media.alt}/>

      </div>

      <section className={style.intro}>
        <h1>{story.content.project_title}</h1>
        <p>project tags. need to setup in cms</p>
      </section>


      <section className={style.problem}>        
        <h2>The Problem</h2>
        <p>{story.content.problem}</p>
      </section>

      <section className={style.solution}>
        <h2>The Solution</h2>
        <p>{story.content.solution}</p>
      </section>

      <FullWidthGallery 
        media={fullGal.media}
      />
      {/* <ContentWithImages/> */}

      <Testimonial 
        align={{textAlign: "left"}}
        company={testimonial.company}
        name={testimonial.name}
        quote={testimonial.quote}
        role={testimonial.role}
      />

      <TwoColumnGallery 
        media={twoColGal.media}
      />

      <CircleLinkWithCaption
        link={nextProject.link}
        button_text={nextProject.button_text}
        title="Next Project"
        image={nextProject.Image}
      />

      <section className={style.contact}>
        <ContactSection
          text="Want to work with us?"
        />
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