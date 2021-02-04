import Head from "next/head"

const SeoComponent = ({ content }) => {
  
  // get objects from the meta array
  const title = content?.find(element => element.component === 'seo_title')
  const description = content?.find(element => element.component === 'seo_description')
  const image = content?.find(element => element.component === 'seo_image')
  const markup = content?.find(element => element.component === 'json-ld_markup')
  const markupTwo = content?.find(element => element.component === 'json-ld_markup_two')

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
        {markupTwo
        ? <script type="application/ld+json">
            {markupTwo.content}
          </script>
        : null}
      </>
    </Head>
  )
}
export default SeoComponent