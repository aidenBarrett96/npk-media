import style from './featuredImage.module.scss'
import Image from 'next/image'

interface FeaturedImg {
  props: any,
  image: any
}

const FeaturedImage = (props: FeaturedImg) => {
  const {filename, alt} = props?.image
  console.log('img filename here:', props)
  
return (
    <div>
      <img 
        src={filename} 
        alt={alt} 
      />
    </div>
  )
}

export default FeaturedImage