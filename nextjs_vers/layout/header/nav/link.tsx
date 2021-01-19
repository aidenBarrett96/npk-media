import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './nav.module.scss'


// A component to extend the functionality of the default 'Link' component - can't add an active className to the default one
const CustomNavLink = ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''

  // apply active class if the pathname and href match
  if (router.pathname === href) {
    className = `${className} ${style.activeNavLink}`
  }

  return <Link href={href}>{React.cloneElement(children, {className})}</Link>
} 

export default CustomNavLink