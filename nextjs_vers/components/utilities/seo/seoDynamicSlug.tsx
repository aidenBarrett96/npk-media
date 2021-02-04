import Head from "next/head"

// Used on homepage, [slug].tsx and contact page
// The pages named above have all their extra seo content specified in the cms

const SeoDynamicSlug = ({ content }) => {
  
  // get objects from the meta array
  const title = content?.find(element => element.component === 'seo_title')
  const description = content?.find(element => element.component === 'seo_description')
  const image = content?.find(element => element.component === 'seo_image')
  const markup = content?.find(element => element.component === 'json-ld_markup')

  return (
    <Head>
      <>
        <title>{title?.content || 'NPK Media - Creative digital agency Liverpool'}</title>
        <meta name="description" content={description?.content || ''}/>
        <meta property="og:title" content={title?.content || 'NPK Media - Creative digital agency Liverpool'}/>
        <meta property="og:description" content={description?.content || ''}/>
        <meta property="og:image" content={image?.content.filename || 'https://npk.media/fallback_img.png'}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content={description?.content || ''}/>
        <meta name="twitter:title" content={title?.content || 'NPK Media - Creative digital agency Liverpool'}/>
        <meta name="twitter:image" content={image?.content.filename || 'https://npk.media/fallback_img.png'}/>
        {markup
        ? <script type="application/ld+json">
            {markup.content}
          </script>
        : null}
      </>
    </Head>
  )
}
export default SeoDynamicSlug