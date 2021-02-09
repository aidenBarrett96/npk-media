import Layout from "../../layout/layout"
import ContactForm from '../../components/utilities/contactForm/contactForm'
import style from './contact.module.scss'
import Lottie from 'react-lottie'
import {useState} from 'react'
import {useGetViewportWidth} from '../../hooks/viewport'
import Image from 'next/image'
import SeoDynamicSlug from "../../components/utilities/seo/seoDynamicSlug"
import { storyblok } from "../../utils/storyblok/storyblok"
import { storyblokStory } from "../../types/storyblok"

const ContactPage = ({ data: story }) => {
  // Set the type for the story and extract nessesary data
  const {...rest}: storyblokStory = story
  // const seoContent = story.data.story.content.meta

  const [igUp, setIgUp] = useState(true)
  const [fbUp, setFbUp] = useState(false)
  const [vmUp, setVmUp] = useState(false)

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
      {/* <SeoDynamicSlug content={seoContent}/> */}
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
                      <a href='' onMouseOver={() => setIgUp(false)} onMouseLeave={() => setIgUp(true)}>
                        <Lottie 
                          options={config.instagram}
                          height={32}
                          width={32}
                          isStopped={igUp}
                        />  
                      </a>
                      <a href='' onMouseOver={() => setFbUp(false)} onMouseLeave={() => setFbUp(true)}>
                        <Lottie 
                          options={config.facebook}
                          height={32}
                          width={32}
                          isStopped={fbUp}
                        />  
                      </a>
                      <a href='' onMouseOver={() => setVmUp(false)} onMouseLeave={() => setVmUp(true)}>
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
                      <a href=''>
                        <Image src="/instagram.svg" alt="instagram logo" width="32" height="32"/>
                      </a>
                      <a href=''> 
                        <Image src="/facebook.svg" alt="facebook logo" width="32" height="32"/>
                      </a>
                      <a href=''>
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


// Query to get data from cms
// export const getStaticProps = async () => {
//   const res = await storyblok.get('cdn/stories/contact', {version: 'draft'})
//   return {
//     props: {
//       data: res
//     }
//   }
// }