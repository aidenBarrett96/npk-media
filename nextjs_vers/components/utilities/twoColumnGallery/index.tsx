import style from './gallery.module.scss'


// need to tweak it to render mp4s etc.


const TwoColumnGallery = ({media}) => {
  return (
    <>
      Two column gallery component
      <div className={style.wrap}>
        
        {media.map(single => (
          <div className={style.item}>
            <img src={single.filename} />
          </div>
        ))}
      </div>
    </>
  )
}
export default TwoColumnGallery