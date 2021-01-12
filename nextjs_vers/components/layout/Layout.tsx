import Head from 'next/head'
import StoryblokService from '../../utils/storyblok-service'
import Header from './header/Header'


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NPK Media</title>
      </Head>

      <Header/>
        <main>
          {children}
        </main>

      {StoryblokService.bridge()}
    </>
  )
}

export default Layout