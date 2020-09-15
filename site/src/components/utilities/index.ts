import ComponentNotFound from './component-not-found';

const ComponentList = {
	componentNotFound: ComponentNotFound,
};

const Components = (type: string) => {
	if (typeof ComponentList[type] === 'undefined') {
		return ComponentNotFound;
	}
	return ComponentList[type];
};

export default Components;
