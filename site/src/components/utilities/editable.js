import React from 'react';

const Editable = ({ data }) => (
	<div dangerouslySetInnerHTML={{ __html: data }} />
);

export default Editable;
