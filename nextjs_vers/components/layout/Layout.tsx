import Head from 'next/head'
import StoryblokService from '../../utils/storyblok-service'
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

      {StoryblokService.bridge()}
    </>
  )
}

export default Layout