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
      <Image 
        src={filename} 
        alt={alt} 
        width={350}
        height={87}
        layout="intrinsic"
      />
    </div>
  )
}

export default FeaturedImage




/* Where used:
1. Our team page
*/