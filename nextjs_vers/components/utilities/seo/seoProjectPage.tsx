import Head from "next/head"

// Used on projects/[slug].tsx
// All data comes from the data that's already on the page

const SeoProjectPage = ({title, description, image }) => {
  return (
    <>
      <Head>
        <title>Project | {title} | NPK Media</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image || 'https://npk.media/fallback_img.png'}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:image" content={image || 'https://npk.media/fallback_img.png'}/>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": `${title}`,
              "description": `${description}`,
              "publisher": {
                  "name": "NPK Media - All in one media agency.",
                  "image": "https://npk.media/fallback_img.png"
              }
          }
          )}}
        />
      </Head>
    </>
  )
}
export default SeoProjectPage