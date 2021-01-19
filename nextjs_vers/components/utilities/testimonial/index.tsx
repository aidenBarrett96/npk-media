import style from './testimonial.module.scss'

const Testimonial = (props) => {
  const {company, name, quote, role} = props

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