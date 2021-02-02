import Link from 'next/link'
import style from './latest.module.scss'
import {FC} from 'react'


interface LatestBlogProps {

}

const LatestBlog:FC<LatestBlogProps> = ({ latestBlog }) => {
  return (
    <section className={style.blogMain}>
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
    </section>
  )
}
export default LatestBlog