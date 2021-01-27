import style from './gallery.module.scss'


// need to tweak it to render mp4s etc.


const TwoColumnGallery = ({media}) => {
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