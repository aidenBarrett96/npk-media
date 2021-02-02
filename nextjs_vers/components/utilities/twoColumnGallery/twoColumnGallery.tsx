import style from './gallery.module.scss'
import {FC} from 'react'

interface TwoColumnGalleryProps {

}

const TwoColumnGallery:FC<TwoColumnGalleryProps> = ({media}) => {
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
                <img src={single.filename} />
              )
            }
          </div>
        ))}
      </div>
    </>
  )
}
export default TwoColumnGallery