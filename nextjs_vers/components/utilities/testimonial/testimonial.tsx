import style from './testimonial.module.scss'
import {FC} from 'react'

interface TestimonialProps {

}
const Testimonial:FC<TestimonialProps> = ({company, name, quote, role, align}) => {

  return (
    <div className={style.reviewWrap} style={align}>
      <h3>"{quote}"</h3>
      {company.filename
        ? <img src={company.filename} alt={company.alt}/>
        : <div className={style.spacer} />
      }
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  )
}
export default Testimonial

/* Where used: 
1. 
*/