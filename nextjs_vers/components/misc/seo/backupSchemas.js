// Backups of the data I put into the cms incase they get deleted
// Also easier to edit them here and copy over to the cms, as they're properly formatted here

/* 
   Includes: homepage, websites, videos, social media and contact page
   The other pages that have dynamic json-ld have it coming from the content that's already on the page (didn't need any extra content)
*/



const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NPK Media",
  "image": "https://npk.media/placeholder.png",
  "@id":"https://npk.media",
  "url": "https://npk.media",
  "telephone": "01513192439",
  "address": {
     "@type": "PostalAddress",
     "streetAddress": "G40, Ayrton House, Commerce Way",
     "addressLocality": "Liverpool",
     "postalCode": "L8 7BA",
     "addressCountry": "GB"
  },
  "geo":{
     "@type": "GeoCoordinates",
     "latitude": 53.398082,
     "longitude": -2.950797
  },
  "openingHoursSpecification": {
     "@type": "OpeningHoursSpecification",
     "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
     ],
     "opens": "09:00",
     "closes": "17:30"
  }
}

// used on homepage
const siteLinks = {
   "@context":"http://schema.org",
   "@type":"ItemList",
   "itemListElement":[
      {
         "@type":"SiteNavigationElement",
         "position":1,
         "name": "Home",
         "description": "NPK Media, an all in one media agency.",
         "url":"https://npk.media"
      },
      {
         "@type":"SiteNavigationElement",
         "position":2,
         "name": "Video Production",
         "description": "Video production Liverpool - Film, video and media producers",
         "url":"https://npk.media/video-production-liverpool"
      },
      {
         "@type":"SiteNavigationElement",
         "position":3,
         "name": "Web Design",
         "description": "Web design and development Liverpool.",
         "url":"https://npk.media/web-design-liverpool"
      },
      {
         "@type":"SiteNavigationElement",
         "position":4,
         "name": "Social Media",
         "description": "Social media content creation services.",
         "url":"https://npk.media/social-media-content-creation-services"
      }
   ]
 }

const videosSchema = {
   "@context": "http://schema.org",
   "@type": "Service",
   "serviceType": "Video production",
   "areaServed": "Worldwide",
   "provider": {
      "@type": "LocalBusiness",
      "name": "NPK Media - Video production Liverpool",
      "@id": "https://npk.media",
      "address": {
         "@type": "PostalAddress",
         "streetAddress": "G40, Ayrton House, Commerce Way",
         "addressLocality": "Liverpool",
         "postalCode": "L8 7BA",
         "addressCountry": "United Kingdom"
      },
      "geo":{
         "@type": "GeoCoordinates",
         "latitude": 53.398082,
         "longitude": -2.950797
      },
      "image": "https://npk.media/fallback_img.png",
      "telephone": "01513192439"
   },
   "availableChannel":{
      "@type": "ServiceChannel",
      "serviceUrl": "https://npk.media",
      "servicePhone": {
         "@type": "ContactPoint",
         "telephone": "01513192439",
         "name": "NPK Media Phone Contact",
         "description": "Enquiries phone number for NPK Media",
         "contactType": "Enquiries",
         "@id": "https://npk.media/get-in-touch/"
      }
   },
   "description": "We produce, film, edit and publish videos for social media campaigns, your website and online ads that capture viewers and hold their attention.",
   "name": "Video production company Liverpool",
   "url": "https://npk.media/video-production-liverpool",
   "@id": "https://npk.media/video-production-liverpool"
}


const websitesSchema = {
   "@context": "http://schema.org",
   "@type": "Service",
   "serviceType": "Web Design and Development",
   "areaServed": "Worldwide",
   "provider": {
      "@type": "LocalBusiness",
      "name": "NPK Media - Web design Liverpool",
      "@id": "https://npk.media",
      "address": {
         "@type": "PostalAddress",
         "streetAddress": "G40, Ayrton House, Commerce Way",
         "addressLocality": "Liverpool",
         "postalCode": "L8 7BA",
         "addressCountry": "United Kingdom"
      },
      "geo":{
         "@type": "GeoCoordinates",
         "latitude": 53.398082,
         "longitude": -2.950797
      },
      "image": "https://npk.media/fallback_img.png",
      "telephone": "01513192439"
   },
   "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://npk.media",
      "servicePhone": {
         "@type": "ContactPoint",
         "telephone": "01513192439",
         "name": "NPK Media Phone Contact",
         "description": "Enquiries phone number for NPK Media",
         "contactType": "Enquiries",
         "@id": "https://npk.media/get-in-touch/"
      }
   },
   "description": "We design, test and build you a beautiful website from scratch based on your users wants and business needs. We don’t use templates, so you know that your users are getting a completely unique experience which will deepen your brand image.",
   "name": "Web Design and Development Liverpool",
   "url": "https://npk.media/web-design-liverpool",
   "@id": "https://npk.media/web-design-liverpool"
}


const socialMediaSchema = {
   "@context": "http://schema.org",
   "@type": "Service",
   "serviceType": "Social Media Content Creation",
   "areaServed": "Worldwide",
   "provider": {
      "@type": "LocalBusiness",
      "name": "NPK Media - Social media services",
      "@id": "https://npk.media",
      "address": {
         "@type": "PostalAddress",
         "streetAddress": "G40, Ayrton House, Commerce Way",
         "addressLocality": "Liverpool",
         "postalCode": "L8 7BA",
         "addressCountry": "United Kingdom"
      },
      "geo":{
         "@type": "GeoCoordinates",
         "latitude": 53.398082,
         "longitude": -2.950797
      },
      "image": "https://npk.media/fallback_img.png",
      "telephone": "01513192439"
   },
   "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://npk.media",
      "servicePhone": {
         "@type": "ContactPoint",
         "telephone": "01513192439",
         "name": "NPK Media Phone Contact",
         "description": "Enquiries phone number for NPK Media",
         "contactType": "Enquiries",
         "@id": "https://npk.media/get-in-touch/"
      }
   },
   "description": "We design, produce and post consistent social media campaigns for you across platforms such as Instagram, Twitter and Youtube that will resonate with your target customers.",
   "name": "Social Media Content Creation Services Liverpool",
   "url": "https://npk.media/social-media-content-creation-services",
   "@id": "https://npk.media/social-media-content-creation-services"
}


const contactPageSchema = { 
   "@context": "https://schema.org",
   "@type": "Organization",
   "url": "https://npk.media/contact",
   "contactPoint": [{ 
      "@type": "ContactPoint",
      "telephone": "01513192439",
      "contactType": "Enquiries",
      "contactOption": "TollFree",
      "areaServed": "Worldwide"
   }, 
   {
      "@type": "ContactPoint",
      "email": "stephen@npkmedia.co.uk",
      "contactType": "Enquiries"
   }]
}
/* title and desc
Get in Touch or Send us an Enquiry | NPK Media

Have an enquiry or want to discuss a potential project with us? Enquire today using the form or give us a call and we'll get back to you within 24 hours.

*/

const ourTeam = {
   "@context": "http://schema.org/", 
   "@type": "AboutPage", 
   "name":  "About Our Team | NPK Media", 
   "description": "Our team consists of incredible individual talents which combine to create beautiful content.", 
   "url": "https://npk.media/our-team"
}

// this ones not in the cms - it's added into the projects/[slug].tsx file
const projectschema =             {
   "@context": "https://schema.org",
   "@type": "WebPage",
   "name": `${title}`,
   "description": `${description}`,
   "publisher": {
       "name": "NPK Media - All in one media agency.",
       "image": "https://npk.media/fallback_img.png"
   }
}