import Head from "next/head"

// Used on blog/[slug].tsx
// This component pulls data that's on the blog so that the markup doesn't need to be specified in the cms for every blog post

const SeoSingleBlog = ({ name, content, published_at, first_published_at, slug }) => {
  const {intro, image, author, tags} = content

  return (
    <Head>
      <>
        <title>{name} | NPK Media</title>
        <meta name="description" content={intro}/>
        <meta property="og:title" content={name}/>
        <meta property="og:description" content={intro}/>
        <meta property="og:image" content={image.filename || 'https://npk.media/fallback_img.png'}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content={intro}/>
        <meta name="twitter:title" content={name}/>
        <meta name="twitter:image" content={image.filename || 'https://npk.media/fallback_img.png'}/>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(
            {
              "@context": "https://schema.org", 
              "@type": "Article",
              "headline": `${name}`,
              "image": `${image.filename}`,
              "author": {
                "@type": 'Person',
                "name": `${author}`
              },
              "editor": {
                "@type": 'Person',
                "name": `${author}`
              }, 
              "genre": `${tags}`,
              "publisher": {
                  "@type": "Organization",
                  "name": "NPK Media",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://npk.media/npk_media_logo.png"
                  }
                },
              "url": `https://npk.media/blog/${slug}`,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://npk.media/blog"
                },
              "datePublished": `${first_published_at}`,
              "dateModified": `${published_at}`,
              "description": `${intro}`
            }
          )}}
        />
      </>
    </Head>
  )
}
export default SeoSingleBlog