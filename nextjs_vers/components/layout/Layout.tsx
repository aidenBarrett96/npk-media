import Head from 'next/head'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import StoryblokService from '../../utils/storyblok-service'


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NPK Media</title>
      </Head>

      <Navbar/>
        <main>
          {children}
        </main>
      <Footer/>
      {StoryblokService.bridge()}
    </>
  )
}

export default Layout