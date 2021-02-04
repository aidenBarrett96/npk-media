import Head from "next/head"

// Used on blog/[slug].tsx
// This component pulls data that's on the blog so that the markup doesn't need to be specified in the cms for every blog post

const SeoSingleBlog = ({ 
    title,
    intro, 
    image, 
    pubDate, 
    editDate, 
    slug, 
    author, 
    tags 
  }) => {
  
  return (
    <Head>
      <>
        <title>{title} | NPK Media</title>
        <meta name="description" content={intro}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={intro}/>
        <meta property="og:image" content={image || 'https://npk.media/fallback_img.png'}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content={intro}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:image" content={image || 'https://npk.media/fallback_img.png'}/>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(
            {
              "@context": "https://schema.org", 
              "@type": "Article",
              "headline": `${title}`,
              "image": `${image}`,
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
              "datePublished": `${pubDate}`,
              "dateModified": `${editDate}`,
              "description": `${intro}`
            }
          )}}
        />
      </>
    </Head>
  )
}
export default SeoSingleBlog