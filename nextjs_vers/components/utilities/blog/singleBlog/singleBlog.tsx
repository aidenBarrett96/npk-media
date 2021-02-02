import ContactSection from '../../contactSection/contactSection'
import style from './single.module.scss'
import {render} from 'storyblok-rich-text-react-renderer'
// import Button from '../../button/button'
import NextProjectOrArticle from '../../nextProjectOrArticle/nextProjectOrArticle'
import {FC} from 'react'


interface SingleBlogProps {

}

const SingleBlog:FC<SingleBlogProps> = ({rest, blogsArr}) => {

  // get the next blog in the array. Each one is seperated by -10 in the cms.
  const nextPositionInArray = rest.position + 10
  const nextBlogPost = blogsArr.data.stories.find(nextBlog => nextBlog.position === nextPositionInArray);

  // if on the final blog in the arrays page, above will return undefined, so pass first blog in the array as the "next blog"
  const firstBlogInArray = blogsArr.data.stories[0]

  console.log('next one;;;', nextBlogPost)
  console.log('if no next;;;;', firstBlogInArray)

  return (
    <div className={style.singleBlog}>
      <section className={style.blogHero}>
        <img src={rest.content.image.filename} alt={rest.content.image.alt} />
      </section>
      <section className={style.intro}>
        <h1>{rest.content.title}</h1>
        <p className={style.tags}>{rest.content.tags}</p>
      </section>
      <section className={style.blogContent}>
        {render(rest.content.long_text)}
      </section>

      <div>
        {nextBlogPost 
          ? (
            <NextProjectOrArticle 
              link={`/blog/${nextBlogPost.slug}`}
              button_text={nextBlogPost.content.title}
              title="Next Article"
              image={nextBlogPost.content.image}
            />
          )
          : (
            <NextProjectOrArticle 
              link={`/blog/${firstBlogInArray.slug}`}
              button_text={firstBlogInArray.content.title}
              title="Next Article"
              image={firstBlogInArray.content.image}
            />
          )
        }
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