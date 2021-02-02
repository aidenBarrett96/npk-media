import { render, MARK_LINK } from 'storyblok-rich-text-react-renderer'
import style from './richText.module.scss'
import Link from 'next/link'
import {FC} from 'react'

interface RichTextProps {

}

const RichText:FC<RichTextProps> = (props) => {
  const rich_text = props?.body

  return (
    <section className={style.richTextBody}>
      {render(rich_text, {
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