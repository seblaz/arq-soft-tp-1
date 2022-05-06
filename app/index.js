const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const hostProxySync = "http://svc1:9090/";
const hostProxyAsync = "http://svc2:9091/";

const axios = require('axios');

app.get('/', (req, res) => {
	res.send('Hello World! \n');
});

app.get('/proxy-sync', (req, res) => {
	axios.get(hostProxySync)
		.then(result => {
			res.send(`${result.data} \n`);
		})
});

app.get('/proxy-async', (req, res) => {
	axios.get(hostProxyAsync)
		.then(result => {
			res.send(`${result.data} \n`);
		})
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
