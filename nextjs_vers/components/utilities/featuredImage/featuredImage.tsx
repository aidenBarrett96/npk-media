import style from './featuredImage.module.scss'
import Image from 'next/image'


const FeaturedImage = (props) => {
  const {filename, alt} = props?.image

  return (
    <div>
      <img src={filename} alt={alt} />
    </div>
  )
}

export default FeaturedImage