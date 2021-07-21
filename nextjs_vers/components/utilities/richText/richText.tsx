import { render, MARK_LINK } from 'storyblok-rich-text-react-renderer'
import style from './richText.module.scss'
import Link from 'next/link'
import {FC} from 'react'

interface RichTextProps {
  body: Array<any>
}

const RichText:FC<RichTextProps> = ({body}) => {

  return (
    <section className={style.richTextBody}>
      {render(body, {
        markResolvers: {
          [MARK_LINK]: (children: React.ReactNode, { href, linktype }: any) => 
          linktype === "story" ? (
            <Link href={href}>
              <a>
                {children}
              </a>
            </Link>
          ) : (
            <a href={href} target="_blank" rel="norefferer noopener">
              {children}
            </a>
          )
        }
      })}
    </section>
  )
}
export default RichText


/* Where used: 
1. 
*/