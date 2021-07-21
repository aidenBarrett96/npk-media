import Head from 'next/head'

// Used in the testimonial component. 
// Will display structured review data in the head tags for any page that has a review.

const SeoReviewSnippet = ({name, quote, rating, date_of_review, image}) => {
  return (
    <>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(
            {
              "@context": "https://schema.org/",
              "@type": "LocalBusiness",
              "image": `${image || 'https://npk.media/fallback_image.png'}`, 
              "name": "NPK Media",
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": `${rating}`
                },
                "author": {
                  "@type": "Person",
                  "name": `${name}`
                },
                "datePublished": `${date_of_review}`,
                "reviewBody": `${quote}`,
              }
            }
          )}}
        />
      </Head>
    </>
  )
}

export default SeoReviewSnippet