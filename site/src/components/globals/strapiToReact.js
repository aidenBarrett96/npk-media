import React from 'react';
import Button from '../utilities/button';

const typeArray = [
	{
		react: Button,
		strapi: 'Strapi_ComponentGeneralCircleLink',
	},
];

export const useStrapiToReact = (compType) => {
	const type = typeArray.filter((type) => type.strapi === compType);

	return type[0].react;
};
