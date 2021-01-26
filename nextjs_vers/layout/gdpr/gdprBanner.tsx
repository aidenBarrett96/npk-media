import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/localStorage'
import style from './banner.module.scss'


const GdprBanner = () => {
  const [cookiesEnabled, setCookiesEnabled] = useLocalStorage('cookiesEnabled')
  

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCookiesEnabled(true)
  //   },3000)
  // })

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