// import custom link component to nav instead of default next/link
import Link from './link'
import style from './nav.module.scss'
import {pageLinks} from './pageLinks'
import Image from 'next/image'
import {useGetViewportWidth} from '../../../hooks/viewport'

const Nav = ({ open }) => {

  const {width} = useGetViewportWidth();

  return (
    <div className={`${style.navWrap} ${open? style.navOpen : style.navClosed}`}>
      <nav>
        <ul className={style.nav}>
          <NavMap/>
          {width < 960 
          ? (
              <div className={style.mobileParts}>
                <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                <p>© NPK MEDIA</p>
              </div>
            )
          : null
          }
        </ul>
          
      </nav>        
    </div>
  )
}
export default Nav


// map through menu links
const NavMap = () => {
  return (
    <>
      {pageLinks.map((item, index) => (
        <li className={style.navLink} key={index}>
          <Link href={item.path}>
            <a onClick={() => !open}>
              {item.imgSrc
                ? (<Image src={item.imgSrc} className={style[item.imgCName]} width="40" height="40"/>)
                : (null) 
              }
              {item.title}
              <span/>
            </a>

          </Link>
        </li>
      ))}
    </>
  )
}