import AnimatedStory from "../../components/utilities/animatedStory/animatedStory"
import FeaturedImage from "../../components/utilities/featuredImage/featuredImage"
import Layout from "../../layout/layout"
import style from './privacy.module.scss'

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className={style.pageWrap}>
        <section className={style.hero}>
          <img src="https://a.storyblok.com/f/92451/x/9f467d7dc3/privacy-policy.svg" />
        </section>        
        <section className={style.content}>
          <h1>Privacy Policy</h1>
            <p>This Privacy Policy governs the manner in which NPK Media collects, uses, maintains and discloses information collected from users (each, a "User") of the www.npkmedia.co.uk website ("Site").</p>
          <h2>Changes to this privacy policy</h2>
            <p>We may collect personal identification information from Users in a variety of ways, including but not limited to; when Users visit our site, submit an enquiry, and in connection with other activities, features, services or resources we make available on our Site. Users may be asked for, where appropriate, email addresses and names. We will only collect personal identification information from Users if they volunteer it to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site related activities.</p>
          <h2>Non-personal identification information</h2>
            <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>
          <h2>Web browser cookies</h2>
            <p>Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
          <h2>How we use information collected</h2>
            <p>NPK Media collects and uses Users personal information for the following purposes:<br/>
              To improve our site. We continually strive to improve our website based on the information and feedback we receive from Users.<br/>
              To get in contact with Users. If users submit personal information identification to us via the contact form, we will get in touch via email to talk about potential business dealings.</p>
          <h2>How we protect your information</h2>
            <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
          <h2>Sharing your personal information</h2>
            <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.</p>
          <h2>Third parties</h2>
            <p>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.</p>
          <h2>Hotjar</h2>
            <p>We use Hotjar in order to better understand our users’ needs and to optimize this service and experience. Hotjar is a technology service that helps us better understand our users’ experience (e.g. how much time they spend on which pages, which links they choose to click, what users do and don’t like, etc.) and this enables us to build and maintain our service with user feedback. Hotjar uses cookies and other technologies to collect data on our users’ behavior and their devices. This includes a device's IP address (processed during your session and stored in a de-identified form), device screen size, device type (unique device identifiers), browser information, geographic location (country only), and the preferred language used to display our website. Hotjar stores this information on our behalf in a pseudonymized user profile. Hotjar is contractually forbidden to sell any of the data collected on our behalf. For further details, please see the ‘about Hotjar’ section of Hotjar’s support site.</p>
          <h2>Changes to this Privacy Policy</h2>
            <p>NPK Media has the discretion to update this Privacy Policy at any time. When we do, we will update the date at the bottom of this page. You acknowledge that it is your responsibility to review this Privacy Policy periodically to become aware of any changes.</p>
          <h2>Acceptance</h2>
            <p>By using the Site, you signify your acceptance of this policy. If you do not agree with the terms outlined in this document, then do not use our site.</p>
          <h2>Contacting Us</h2>
            <p>If you have any questions about this Privacy Policy, the practices of this Site or your use of it, please contact us at:</p>
            <button><a href="mailto:info@npkmedia.co.uk">EMAIL INFO@NPKMEDIA.CO.UK</a></button>
            <p>This document was last updated on the 30th of April, 2020.</p>
        </section>
      </div>
    </Layout>
  )
}
export default PrivacyPolicy