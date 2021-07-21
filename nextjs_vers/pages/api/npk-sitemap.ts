import { storyblok } from "../../utils/storyblok/storyblok"

// This route is redirected to npk.media/npk-sitemap.xml from next.config

// Pages that are hard coded, so won't be returned from the storyblok.get request
const staticPages = [
  {
    link: 'contact'
  },
  {
    link: 'privacy-policy'
  },
  {
    link: 'blog'
  }
]


export default async (req, res) => {

  // Get the non-dynamic pages
  const hardCodedPages = staticPages.map((single) => {
    return `<url><loc>https://npk.media/${single.link}</loc></url>`
  })


  // Request all dynamic pages from the cms
  const allPages = await storyblok.get('cdn/stories/', {version: 'draft'})

  // @ts-ignore
  const routes = allPages.data.stories.map((singlePage) => `${singlePage.full_slug}`)

  const urlSet = routes.map((page) => {
    const path = page 
    .replace('home', '')
    const route = path === '/index' ? '' : path;
      return `<url><loc>https://npk.media/${route}</loc></url>`
    }
  )
  .join('')
  

  // Combine the dynamic pages set and hard coded set of pages
  const fullSet = urlSet.concat(hardCodedPages)


  // Add the full set of pages to the correct xml encoding
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${fullSet}</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}