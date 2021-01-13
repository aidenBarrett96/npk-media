import {useRouter} from 'next/router'
import React, { useEffect, useState } from 'react'
import webA1 from '../../assets/page-assets/websites/animations/1-bridge-web.json'
import webA2 from '../../assets/page-assets/websites/animations/2-bridge-web.json'
import webA3 from '../../assets/page-assets/websites/animations/3-bridge-web.json'
import webA4 from '../../assets/page-assets/websites/animations/4-bridge-web.json'
import webA5 from '../../assets/page-assets/websites/animations/5-loop-web.json'
import vidA1 from '../../assets/page-assets/videos/animations/1-bridge-video.json'
import vidA2 from '../../assets/page-assets/videos/animations/2-loop-video.json'
import socA1 from '../../assets/page-assets/social-media/animations/1-bridge-social.json'
import socA2 from '../../assets/page-assets/social-media/animations/2-bridge-social.json'
import socA3 from '../../assets/page-assets/social-media/animations/3-bridge-social.json'
import socA4 from '../../assets/page-assets/social-media/animations/4-loop-social.json'


const webAnimations = [webA1, webA2, webA3, webA4, webA5]
const videoAnimations = [vidA1, vidA2]
const socialAnimations = [socA1, socA2, socA3, socA4]

const useAnimation = ({story}) => {
  // const router = useRouter()
  const [animations, setAnimations] = useState([])


  useEffect(() => {
    if (story.name === 'Websites') {
      setAnimations(webAnimations)
    } 
    else if (story.name === 'Videos') {
      setAnimations(videoAnimations)
    } 
    else if (story.name === 'Social media') {
      setAnimations(socialAnimations)
    }
  })

  return animations
}
export default useAnimation