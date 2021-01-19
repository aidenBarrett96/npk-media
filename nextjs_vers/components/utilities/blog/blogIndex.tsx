import Link from 'next/link'
import CircleLinkWithCaption from '../circleLinkWithCaption'
import style from './blog.module.scss'


const BlogIndex = ({content}) => {
  const {data} = content
  
  // split array of blogs - latest one for the header and the rest to loop through in the body
  const latestBlog = data.stories[0]
  const allOtherBlogs = data.stories.slice(1)

  return (
    <>
    <Link href={`/blog/${latestBlog.slug}`}>
      <a>
        <section className={style.hero}>
          <div className={style.latestBlog}>
            <p>{latestBlog.content.tags}</p>
            <h1>{latestBlog.name}</h1> 
          </div>
        </section>
      </a>
    </Link>
   

    <section className={style.blogs}>
      <h2>Latest Articles</h2>
      {allOtherBlogs.map((article) => (
        <div key={article.name}>
          <p className={style.tags}>{article.content.tags}</p>
          <Link href={`/blog/${article.slug}`}>
            <a><h3>{article.name}</h3></a>
          </Link>
          <p>
            Written by {article.content.author || 'someone at NPK Media'} on {/* */} 
            {
              new Date(article.published_at)
              .toDateString()
            }
          </p>
          <hr/>
        </div>
        
      ))}
    </section>
      <CircleLinkWithCaption
        title="Want to work with us?"
        button_text="Get in touch"
        link="large"        
      />
    </>
  ) 
}
export default BlogIndex