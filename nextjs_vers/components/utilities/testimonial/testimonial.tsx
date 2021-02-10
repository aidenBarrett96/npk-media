import style from './testimonial.module.scss'
import {FC} from 'react'
import SeoReviewSnippet from '../seo/seoReviewSnippet'
import Image from 'next/image'

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
        <h2>"{quote}"</h2>
        {company.filename
          ? <div className={style.img}>
              <Image 
                src={company.filename} 
                alt={company.alt}
                height={35}
                width={64}
              />
            </div>
          : <div className={style.spacer} />
        }
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </>
  )
}
export default Testimonial

/* Where used: 
1. 
*/