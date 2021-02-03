import style from './card.module.scss'
import Link from 'next/link'
import {FC} from 'react'

interface BlogCardProps {
  currentBlogs: Array<any>
}

const BlogCard:FC<BlogCardProps> = ({ currentBlogs }) => {
  return ( 
    <>
      {currentBlogs.map((blog) => (
        <div key={blog.name} className={style.blog}>
          <p className={style.tags}>{blog.content.tags}</p>
          <Link href={`/blog/${blog.slug}`}>
            <a><h3>{blog.name}</h3></a>
          </Link>
          <p>
            Written by {blog.content.author || 'someone at NPK Media'} on {/* */} 
            {
              new Date(blog.created_at)
              .toDateString()
            }
          </p>
        </div>
      ))}
    </>
  )
}

export default BlogCard