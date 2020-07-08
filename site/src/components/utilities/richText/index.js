import React from 'react';

import ReactMarkdown from 'react-markdown';

const RichText = ({ body }) => <ReactMarkdown source={body} />;

export default RichText;
