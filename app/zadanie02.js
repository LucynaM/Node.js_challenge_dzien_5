//Twój kod
const express = require('express');
const app = express();


let name = '';

app.get('/name/set/:name', (req, res) => {
	name = req.params.name;
	res.send(name);
});

app.get('/name/show', (req, res) => {
	res.send(name);
});

app.get('/name/check', (req, res) => {
	if (name) {
		res.send(name);
	} else {
		res.send('Nie podano imienia');
	}
});

app.listen(3000, () => {
	console.log('Serwer uruchomiony na porcie 3000');
});