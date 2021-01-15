import React from 'react';

export const filterProjectsByCategory = (projects, providedCategory) => {
	const filteredProjects = projects.filter((project) => {
		const categories = project.categories.map((category) => category.name);
		return categories.includes(providedCategory);
	});
	return filteredProjects;
};
