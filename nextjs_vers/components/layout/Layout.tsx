import Head from 'next/head'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

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
    </>
  )
}

export default Layout