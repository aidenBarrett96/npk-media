import React, {FC} from 'react';
import Button from '../button/button';
import style from './style.module.scss';


interface NextProjectProps {
  title: string,
  button_text: string,
  link: any,
  image: {
    filename: string,
    alt: string
  }
}

const NextProjectOrArticle:FC<NextProjectProps> = ({title, button_text, link, image}) => {
	return (
		<div className={style.container}>
			<h2>{title}</h2>
      <div className={style.inner}>
        {image
          ? <img src={image.filename} alt={image.alt} className={style.nextImage}/>
          : null
        }
        {link.cached_url 
          ? <Button text={button_text} link={`/${link.cached_url}`} large />
          : <Button text={button_text} link={link} large />
        }
        
      </div>
		</div>
	);
};
export default NextProjectOrArticle

