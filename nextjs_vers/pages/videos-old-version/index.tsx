import { storyblok } from '../../utils/storyblok/storyblok'

const VideosPage = ({ data: story }) => {
  // const { ...rest } = story

  return (
    <>
      Videos page
    </>
  )
}

export default VideosPage


// export const getStaticProps = async () => {
//   const res = await storyblok.get('/cdn/stories/videos', {})

//   return {
//     props: {
//       data: res.data.story
//     }
//   }

// }