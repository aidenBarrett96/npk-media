import RichText from '../richText/richText'
import style from './blog.module.scss'

const SingleBlog = ({rest}) => {
  console.log(rest.content.long_text.content)
  return (
    <div className={style.singleBlog}>
    <section className={style.blogHero}>
      <img src={rest.content.image.filename} alt={rest.content.image.alt} />
    </section>
    <section>
      <h1>{rest.content.title}</h1>
      <p className={style.tags}>{rest.content.tags}</p>
    </section>
    <section className={style.blogContent}>
      <RichText props={rest.content.long_text.content} />
    </section>
    </div>
  )
}
export default SingleBlog