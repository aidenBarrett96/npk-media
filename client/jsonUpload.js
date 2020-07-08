const fetch = require('node-fetch');

const args = require('minimist')(process.argv.slice(2));

console.log('args :>> ', args['file']);

const file = args['file'];
const endpoint = args['endpoint'];

const fileContent = require(file);

var myHeaders = new fetch.Headers();
myHeaders.append('Content-Type', 'application/json');

fileContent.forEach((item) => {
	const raw = JSON.stringify(item);

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	};

	fetch(`https://npk-media-cms.herokuapp.com/${endpoint}`, requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
});
