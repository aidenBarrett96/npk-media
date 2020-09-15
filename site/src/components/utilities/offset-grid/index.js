import React from 'react';
import style from './offset-grid.module.scss';

const OffsetGrid = ({ children }) => {
	return <div className={style.offsetGrid}>{children}</div>;
};

export default OffsetGrid;
