import ContactSection from '../contactSection'
import RichText from '../richText/richText'
import style from './blog.module.scss'
import {render} from 'storyblok-rich-text-react-renderer'


const SingleBlog = ({rest, blogsArr}) => {
  console.log(rest.content.long_text.content)
  console.log('single from component', blogsArr)


  return (
    <div className={style.singleBlog}>
      <section className={style.blogHero}>
        <img src={rest.content.image.filename} alt={rest.content.image.alt} />
      </section>
      <section>
        <h1>{rest.content.title}</h1>
        <p className={style.tags}>{rest.content.tags}</p>
        {render(rest.content.long_text)}
      </section>
      <div>
        To next blog 
      </div>
      <ContactSection 
        text="Want to work with us?"
      />
    </div>
  )
}
export default SingleBlog


/* Where used:
1. blog/[slug]
*/