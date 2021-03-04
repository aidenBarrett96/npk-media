import style from './fullwidth.module.scss'
import {FC} from 'react'

interface FullWidthGalleryProps {
  media: Array<any>
}

const FullWidthGallery:FC<FullWidthGalleryProps> = ({media}) => {

  return (
    <>
      <div className={style.wrap}>
        {media.map(single => (
          <div className={style.item} key={single.filename}>
            {
              single.filename.endsWith('mp4') 
              ? (
                <video
                  loop
                  muted
                  onCanPlay={(e) => {
                    e.currentTarget.play();
                  }}
                >
                  <source src={`${single.filename}`} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              )
              : (
                <img src={single.filename} alt={single.alt}/>
              )
            }
          </div>
        ))}
      </div>
    </>

  )
}
export default FullWidthGallery


/*
{node.ext !== '.mp4' ? (
  <img src={`${node.url}`} alt={node.alternativeText} />
) : (
  <video
    loop
    muted
    onCanPlay={(event) => {
      event.currentTarget.play();
    }}>
    <source src={`${node.url}`} type='video/mp4' />
    Your browser does not support the video tag.
  </video>
)}
*/