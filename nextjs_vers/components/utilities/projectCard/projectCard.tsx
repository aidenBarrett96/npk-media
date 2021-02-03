import React, {FC} from 'react';
import style from './projectCard.module.scss';
import Link  from 'next/link';
import Button from '../button/button';

interface ProjectCardProps {
	project: {
		title: string,
		project: any,		
		media: {
			filename: string,
			alt: string
		}
	}
}


const ProjectCard:FC<ProjectCardProps> = ({project}) => {
	const {media, title} = project

	return (
	<div className={style.container}>

		<div className={style.media}>
			<div className={style.mediaInner}>
				{media.filename.endsWith('mp4') 
				? (
						<video
							loop
							muted
							onCanPlay={(e) => {
								e.currentTarget.play();
							}}
							>
							<source src={media.filename} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					) 
				: (
						<img
							src={media.filename}
							alt={media.alt}
						// className={index === 0 ? style.featured : style.image}
						/>
				)}
			</div>
		</div>

		<div className={style.btnWrap}>
			<div className={style.btn}>
				<Link href={project.project.cached_url}>
					<a>
						<Button 
							text={title}
							link={project.project.cached_url}
							large
						/>
					</a>
				</Link>
			</div>
		</div>

	</div>
)};

export default ProjectCard;


/* Where used: 
1. 
*/