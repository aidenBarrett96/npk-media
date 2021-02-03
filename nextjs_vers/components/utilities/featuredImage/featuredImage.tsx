import style from './featuredImage.module.scss'
import Image from 'next/image'
import {FC} from 'react'

interface FeaturedImg {
  image: {
    filename: string,
    alt: string
  }
}

const FeaturedImage: FC<FeaturedImg> = ({image}) => {
  const {filename, alt} = image
  
  return (
    <div className={style.imageWrap}>
      <img 
        src={filename} 
        alt={alt} 
      />
    </div>
  )
}

export default FeaturedImage




/* Where used:
1. Our team page
*/