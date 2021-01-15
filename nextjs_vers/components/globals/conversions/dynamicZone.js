import React from 'react';
import types from './componentArray';

const getPropByString = (obj, propString) => {
	const propArray = propString.split('.');
	let returnedProp = '';
	propArray.forEach(
		(prop) => (returnedProp = !returnedProp ? obj[prop] : returnedProp[prop])
	);
	return returnedProp;
};

const DynamicZone = ({ content }) => {
	const addProps = (block, props) => {
		let returnable = {};
		for (let [key, value] of Object.entries(props)) {
			returnable[key] = getPropByString(block, value);
		}
		return returnable;
	};

	content.map((block) => {
		block.react = types.filter((type) => type.strapi === block.__typename)[0];
		if (typeof block.react !== 'undefined')
			block.props = addProps(block, block.react.props);
	});

	console.log('content :>> ', content);

	return content.map((block) => (
		<section
			style={{
				marginBottom: block.react.name === 'Animated Story' ? '30px' : '100px',
			}}>
			{block.react.react({ ...block.props })}
		</section>
	));
};

export default DynamicZone;
