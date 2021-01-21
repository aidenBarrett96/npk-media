import style from './testimonial.module.scss'

const Testimonial = ({company, name, quote, role}) => {

  return (
    <div className={style.reviewWrap}>
      <h3>"{quote}"</h3>
      <img src={company.filename} alt={company.alt}/>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  )
}
export default Testimonial

/* Where used: 
1. 
*/