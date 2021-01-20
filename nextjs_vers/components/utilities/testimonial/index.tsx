import style from './testimonial.module.scss'

const Testimonial = ({company, name, quote, role}) => {

  return (
    <div>
      <h3>{quote}</h3>
      <span>{company}</span>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  )
}
export default Testimonial

/* Where used: 
1. 
*/