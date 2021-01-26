import Layout from "../../layout/layout"
import ContactForm from '../../components/utilities/contactForm'
import style from './contact.module.scss'

const ContactPage = () => {

  return (
    <Layout>
      <main className={style.main}>
        <section>
          <h1>Get in Touch</h1>
          <ContactForm/>
        </section>

        <section className={style.contactDetails}>
          <div>
            <h2>Email or Phone</h2>
            <a href='mailto:stephen@npkmedia.co.uk'>stephen@npkmedia.co.uk</a>
            <br />
            <a href='tel:01513192439'>(+44) 0151 319 2439</a>
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

          <div>
            <h2>Social Media</h2>
            <div  className={style.social}>
              <a href=''><img src="" alt="Ig" /></a>
              <a href=''><img src="" alt="Fb" /></a>
              <a href=''><img src="" alt="Vm" /></a>
            </div>
          </div>
        </section>
      </main>
      
    </Layout>
  )
}

export default ContactPage 