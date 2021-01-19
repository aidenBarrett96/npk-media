import Head from 'next/head'
import Header from './header/header'
import style from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NPK Media</title>
      </Head>

      <Header/>
        <main className={style.main}>
          {children}
        </main>
    </>
  )
}

export default Layout