import style from './card.module.scss'
import Link from 'next/link'
import {FC} from 'react'

interface AllBlogsGridProps {
  allBlogs: Array<any>
}

const AllBlogsGrid:FC<AllBlogsGridProps> = ({ allBlogs }) => {
  return ( 
    <>
      {allBlogs.map((blog) => (
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

export default AllBlogsGrid