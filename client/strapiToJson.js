const fetch = require('node-fetch');

const fs = require('fs');

const endpoint = process.argv[2];

console.log('endpoint :>> ', endpoint);

const appendToFile = (document) => {
	const docAsJson = `${JSON.stringify(document)}`;
	fs.appendFileSync(`${endpoint}-export.json`, docAsJson, {
		flag: 'a+',
	});
};

fetch(`http://localhost:1337/${endpoint}`)
	.then((response) => response.json())
	.then((data) => {
		appendToFile(data);
	});
