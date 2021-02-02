import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useLocalStorage } from '../../hooks/localStorage'
import style from './banner.module.scss'
import {useGetScrollPosition} from '../../hooks/useGetScrollPosition'

const GdprBanner = () => {
  const [cookiesEnabled, setCookiesEnabled] = useLocalStorage('cookiesEnabled')
  const scrollPos = useGetScrollPosition()


  useEffect(() => {
    if(scrollPos < 300) {
      return
    } 
    setTimeout(() => {
      setCookiesEnabled(true)
    }, 3000)
  }, [scrollPos])


  if (cookiesEnabled) return null;

  return (
    <div className={style.wrap}>
      <p>We use cookies to improve our site.</p>
      <div className={style.btns}>
        <Link href="/privacy-policy">
          <a>READ MORE</a>
        </Link>
        <button onClick={() => setCookiesEnabled(true)}>OKAY, NO PROBLEM</button>
      </div>
    </div>
  )
}
export default GdprBanner