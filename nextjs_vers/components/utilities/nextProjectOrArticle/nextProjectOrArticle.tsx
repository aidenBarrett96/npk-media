import Image from 'next/image';
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
        <div className={style.image}>
          {image
            ? <Image 
                src={image.filename} 
                alt={image.alt} 
                className={style.nextImage}
                width={400}
                height={298}
                objectFit="cover"
                layout="intrinsic"
              />
            : null
          }
        </div>
        {link.cached_url 
          ? <Button text={button_text} link={`/${link.cached_url}`} large />
          : <Button text={button_text} link={link} large />
        }
        
      </div>
		</div>
	);
};
export default NextProjectOrArticle

