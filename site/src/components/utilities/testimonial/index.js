import React from 'react';
import style from './testimonial.module.scss';
import { useInView } from 'react-intersection-observer';

const Testimonial = ({ quote, author, role, avatar, brand }) => {
	const [ref, inView] = useInView({
		threshold: 1,
		triggerOnce: true,
	});
	return (
		<div
			className={`${style.testimonial} ${inView && style.visible}`}
			ref={ref}>
			<div className={style.background}>
				<img src={``} />
			</div>
			<p className={style.quote}>{quote}</p>
			<div className={style.avatar}>
				<img src={avatar} />
			</div>
			<h4>{author}</h4>
			<h5>{role}</h5>
			<h5>{brand}</h5>
		</div>
	);
};

export default Testimonial;
