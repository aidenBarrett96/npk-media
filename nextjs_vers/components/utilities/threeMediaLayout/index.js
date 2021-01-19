import React, { useState, useRef, useEffect } from 'react';
import cStyle from './threeMediaLayout.module.scss';
import { useGetViewportWidth } from '../../../hooks/viewporta';

const ThreeMediaLayout = ({ featuredPosition, media }) => {
	const {width} = useGetViewportWidth();
	const [rowHeight, setRowHeight] = useState(null);

	const ref = useRef();

	const gridRowHeight = {
		gridTemplateRows: `${rowHeight}px ${rowHeight}px`,
	};

	useEffect(() => {
		setRowHeight((ref.current.offsetWidth - 20) / 2);
	}, [ref]);

	useEffect(() => {
		setRowHeight((ref.current.offsetWidth - 20) / 2);
	}, [width]);
	return (
		<div
			className={`${cStyle.container} ${cStyle[featuredPosition]}`}
			ref={ref}
			style={gridRowHeight}>
			{media.map((node, index) => (
				<div className={`${cStyle.wrapper} ${index === 0 && cStyle.featured}`}>
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
				</div>
			))}
		</div>
	);
};

export default ThreeMediaLayout;
