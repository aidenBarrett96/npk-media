import style from './fullwidth.module.scss'

const FullWidthGallery = ({media}) => {
  return (
    <>
      Full width gallery
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
export default FullWidthGallery