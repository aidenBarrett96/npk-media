import ContactSection from '../../contactSection/contactSection'
import style from './single.module.scss'
import {render} from 'storyblok-rich-text-react-renderer'
// import Button from '../../button/button'
import NextProjectOrArticle from '../../nextProjectOrArticle/nextProjectOrArticle'
import {FC} from 'react'
import Image from 'next/image'


interface SingleBlogProps {
  position: number,
  content: {
    image: any,
    title: string,
    tags: string,
    long_text: string,
  },
  stories: Array<any>
}

const SingleBlog:FC<SingleBlogProps> = ({position, content, stories}) => {

  // get the next blog in the array. Each one is seperated by -10 in the cms.
  const nextPositionInArray = position + 10
  const nextBlogPost = stories.find(nextBlog => nextBlog.position === nextPositionInArray);

  // if on the final blog in the array, above will return undefined, so pass first blog in the array as the "next blog"
  const firstBlogInArray = stories[0]


  return (
    <>
      <div className={style.singleBlog}>
        <section className={style.blogHero}>
          <Image 
            src={content.image.filename} 
            alt={content.image.alt} 
            layout="fill"
          />
        </section>
        <section className={style.intro}>
          <h1>{content.title}</h1>
          <p className={style.tags}>{content.tags}</p>
        </section>
        <section className={style.blogContent}>
          {render(content.long_text)}
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
    </>
  )
}
export default SingleBlog


/* Where used:
1. blog/[slug]
*/