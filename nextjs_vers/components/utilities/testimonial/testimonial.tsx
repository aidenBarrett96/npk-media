import style from './testimonial.module.scss'
import {FC} from 'react'
import Head from 'next/head'
import SeoReviewSnippet from '../seo/seoReviewSnippet'

interface TestimonialProps {
  company: {
    filename: string,
    alt: string,
  },
  name: string,
  quote: string,
  role: string,
  align: object,
  rating: number,
  date_of_review: string
}
const Testimonial:FC<TestimonialProps> = ({company, name, quote, role, align, rating, date_of_review}) => {


  return (
    <>
      <SeoReviewSnippet 
        name={name}
        quote={quote}
        rating={rating}
        date_of_review={date_of_review}
        image={company.filename}
      />
      <div className={style.reviewWrap} style={align}>
        <h3>"{quote}"</h3>
        {company.filename
          ? <img src={company.filename} alt={company.alt}/>
          : <div className={style.spacer} />
        }
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </>
  )
}
export default Testimonial

/* Where used: 
1. 
*/