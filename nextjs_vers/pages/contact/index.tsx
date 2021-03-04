import Layout from "../../layout/layout"
import ContactForm from '../../components/utilities/contactForm/contactForm'
import style from './contact.module.scss'
import Lottie from 'react-lottie'
import {useState} from 'react'
import {useGetViewportWidth} from '../../hooks/viewport'
import Image from 'next/image'
import Head from "next/head"

const ContactPage = () => {
  const [igUp, setIgUp] = useState(true)
  const [fbUp, setFbUp] = useState(true)
  const [vmUp, setVmUp] = useState(true)

  const isDesktop = useGetViewportWidth()
  const mobile = isDesktop.width < 960

  const config = {
    instagram: {
      loop: false,
      autoplay: false,
      animationData: require('../../assets/header/animations/InstagramHover.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    },
    facebook: {
      loop: false,
      autoplay: false,
      animationData: require('../../assets/header/animations/FacebookHover.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    },
    vimeo: {
      loop: false,
      autoplay: false,
      animationData: require('../../assets/header/animations/VimeoHover.json'),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

  }

  return (
    <>
      <Head>
        <title>Get in Touch or Send us an Enquiry | NPK Media</title>
        <meta property="description" content="Have an enquiry or want to discuss a potential project with us? Enquire today using the form or give us a call and we'll get back to you within 24 hours."/>
      </Head>
      <Layout>
        <div className={style.pageWrap}>
          <main className={style.main}>
            <section>
              <h1>Get in Touch</h1>
              <ContactForm/>
            </section>

            <section className={style.contactDetails}>
              <div className={style.details}>
                <h2>Email or Phone</h2>
                <a href='mailto:stephen@npkmedia.co.uk'>stephen@npkmedia.co.uk</a>
                <a href='tel:01513192439'>(+44) 0151 319 2439</a>
                {!mobile
                ? <div>
                    <div className={style.socialIcons}>
                      <a href='https://www.instagram.com/npk_media/?hl=en' target="_blank" rel="noopener nofollow" onMouseOver={() => setIgUp(false)} onMouseLeave={() => setIgUp(true)}>
                        <Lottie 
                          options={config.instagram}
                          height={32}
                          width={32}
                          isStopped={igUp}
                        />  
                      </a>
                      <a href='https://www.facebook.com/NPKMedia/' target="_blank" rel="noopener nofollow" onMouseOver={() => setFbUp(false)} onMouseLeave={() => setFbUp(true)}>
                        <Lottie 
                          options={config.facebook}
                          height={32}
                          width={32}
                          isStopped={fbUp}
                        />  
                      </a>
                      <a href='https://vimeo.com/npkmedia' target="_blank" rel="noopener nofollow" onMouseOver={() => setVmUp(false)} onMouseLeave={() => setVmUp(true)}>
                        <Lottie 
                          options={config.vimeo}
                          height={32}
                          width={32}
                          isStopped={vmUp}
                        />  
                      </a>
                    </div>
                  </div>
                : null
                }
              </div>

              <div className={style.address}>
                <h2>Address</h2>
                <p>
                  G40
                  <br /> Ayrton house
                  <br /> Commerce way
                  <br /> Liverpool
                  <br /> L8 7BA
                </p>
              </div>

              {mobile
                ? <div>
                    <h2>Social Media</h2>
                    <div className={style.socialIcons}>
                      <a href='https://www.instagram.com/npk_media/?hl=en' target="_blank" rel="noopener nofollow">
                        <Image src="/instagram.svg" alt="instagram logo" width="32" height="32"/>
                      </a>
                      <a href='https://www.facebook.com/NPKMedia/' target="_blank" rel="noopener nofollow"> 
                        <Image src="/facebook.svg" alt="facebook logo" width="32" height="32"/>
                      </a>
                      <a href='https://vimeo.com/npkmedia' target="_blank" rel="noopener nofollow">
                        <Image src="/vimeo.svg" alt="vimeo logo"  width="32" height="32"/>
                      </a>
                    </div>
                  </div>
                : null
              }
              
            </section>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage 