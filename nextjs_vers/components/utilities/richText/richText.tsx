import { render } from 'storyblok-rich-text-react-renderer'
import style from './richText.module.scss'


const RichText = (props) => {
  const rich_text = props?.body

  return (
    <section>
      {render(rich_text)}
    </section>
  )
}
export default RichText