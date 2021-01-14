import { ComponentArray } from "../../components/components"
import Layout from "../../components/layout/layout"
import { storyblokStory } from "../../types/storyblok"
import { storyblok } from "../../utils/storyblok/storyblok"
import ContactForm from '../../components/utilities/contactForm'


const ContactPage = () => {
  // const {...rest}: storyblokStory = story


  return (
    <Layout>
      <main>
        <section>
          <h1>Get in Touch</h1>
          <ContactForm/>
        </section>

        <section className="{pStyle.contactDetails}">
          <div>
            <h2>Contact</h2>
            <a href='mailto:stephen@npkmedia.co.uk'>stephen@npkmedia.co.uk</a>
            <br />
            <a href='tel:01513192439'>(+44) 0151 319 2439</a>
          </div>

          <div>
            <h2>Address</h2>
            <p>
              G40
              <br /> Ayrton house
              <br /> Commerce way
              <br /> Liverpool
              <br /> L8 7BA
            </p>
          </div>

          <div>
            <h2>Social Media</h2>
            <a href=''>Instagram</a>
            <br />
            <a href=''>Facebook</a>
            <br />
            <a href=''>Vimeo</a>
            <br />
          </div>
        </section>
      </main>
      
    </Layout>
  )
}

export default ContactPage 


// export async function getStaticProps() {
//   const res = await storyblok.get('cdn/stories/contact', {version: 'draft',})

//   return {
//     props: {
//       data: res
//     }
//   }
// }