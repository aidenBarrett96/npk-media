import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './nav.module.scss'


// A component to extend the functionality of the default 'Link' component - can't add an active className to the next/link one


const CustomNavLink = ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''

  // apply active class if the pathname and href match
  // for dynamic routes - if the query matches the href, apply active class
  if (router.pathname === href || `/${router.query.slug}` === href) {
    className = `${className} ${style.activeNavLink}`
  }

  return <Link href={href}>{React.cloneElement(children, {className})}</Link>
} 

export default CustomNavLink