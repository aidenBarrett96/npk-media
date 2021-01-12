// import custom link component to nav instead of default next/link
import Link from './Link'
import style from './nav.module.scss'
import {pageLinks} from './pageLinks'

const Nav = ({ open }) => {
  return (
    <div className={`${style.navWrap} ${open? style.navOpen : style.navClosed}`}>
      <nav>
        <ul className={style.nav}>
          <NavMap/>
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
            <a>
              {item.imgSrc
                ? (<img src={item.imgSrc} className={style[item.imgCName]}/>)
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