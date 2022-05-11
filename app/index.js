const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const hostProxySvc1 = "http://svc1:9090/";
const hostProxySvc2 = "http://svc2:9091/";

const axios = require('axios');

app.get('/', (req, res) => {
	res.send('Hello World! \n');
});

app.get('/proxy1', (req, res) => {
	axios.get(hostProxySvc1)
		.then(result => {
			res.send(`${result.data} \n`);
		})
});

app.get('/proxy2', (req, res) => {
	axios.get(hostProxySvc2)
		.then(result => {
			res.send(`${result.data} \n`);
		})
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});